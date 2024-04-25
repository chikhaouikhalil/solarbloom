import {
  Divider,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DrawerHeader from "../components/elements/header/DrawerHeader";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setPlantsData, setUserData } from "../redux/Actions";
import axios from "axios";
import { SERVER } from "../firebase";
import * as Device from "expo-device";
import { width } from "../utils/GlobalStyle";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { ActionSheetComponent } from "../components/elements/ActionSheet";
import PlantItem from "../components/PlantItem";
import DeletePlant from "../components/DeletePlant";
import NetInfo from "@react-native-community/netinfo";
import LineChartComponent from "../components/LineChart";
import moment from "moment";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#ffffff",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "ef946bb7-5e94-479f-974d-f08b4b393195",
      })
    ).data;

    const _id = await AsyncStorage.getItem("_id");
    if (Platform.OS == "android") {
      axios
        .put(`${SERVER}/users/update-user?user=${_id}`, {
          android_token: token,
        })
        .then(async (res) => {
          // console.log(res.data);
        });
    } else {
      // case ios
      axios.put(`${SERVER}/users/update-user?user=${_id}`, {
        ios_token: token,
      });
    }
  } else {
    console.log("Must use physical device for Push Notifications");
  }

  return token;
}

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const plantsData = useSelector((state) => state.plantsData);
  const [loader, setLoader] = useState(true);
  const [showPlantsList, setShowPlantsList] = useState(false);
  const [showDeletePlant, setShowDeletePlant] = useState(false);
  const [plantToDelete, setPlantToDelete] = useState(null);

  const getUserData = async () => {
    NetInfo.fetch().then(async (state) => {
      if (state.isConnected) {
        try {
          await dispatch(setUserData());
          axios.get(`${SERVER}/plants`).then(async (resPlants) => {
            await dispatch(setPlantsData(resPlants.data));
            setLoader(false);
            registerForPushNotificationsAsync();
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        navigation.replace("NoConnection");
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View flex={1}>
      <DrawerHeader title="Dashboard" date />
      {loader || userData.garden == undefined ? (
        <VStack flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color="#0f766e" size="large" />
        </VStack>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/home1.png")}
            style={{ width: width, height: (width / 5) * 2 }}
          />
          {/* account section */}
          <VStack px="2">
            <VStack
              bg="#ffffff90"
              borderWidth="1"
              borderColor="white"
              p="2"
              py="4"
              style={{ marginTop: -(width / 5) * 1.3 }}
              borderRadius="xl"
            >
              <Text
                color="warmGray.900"
                textAlign="center"
                fontFamily="SemiBold"
                fontSize="xl"
              >
                Welcome Back
              </Text>
              <HStack alignItems="center" justifyContent="space-between">
                <HStack alignItems="center">
                  <VStack style={styles.avatarContainer} bg="teal.600" mr="4">
                    <MaterialCommunityIcons
                      name="account"
                      size={30}
                      color="white"
                    />
                  </VStack>
                  <VStack>
                    <Text color="warmGray.800" fontSize="sm">
                      {userData.firstname} {userData.lastname}
                    </Text>
                    <Text mt="-1" color="warmGray.800" fontSize="xs">
                      {userData.email}
                    </Text>
                  </VStack>
                </HStack>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MyAccount")}
                >
                  <AntDesign name="rightsquare" size={40} color="#0d9488" />
                </TouchableOpacity>
              </HStack>
            </VStack>
          </VStack>
          <VStack px="3">
            {/* Garden Section */}
            <Text
              color="warmGray.800"
              fontSize="lg"
              mt="5"
              fontFamily="SemiBold"
            >
              My Garden
            </Text>
            {userData.garden?.length == 0 ? (
              <VStack
                mt="3"
                borderStyle="dashed"
                borderWidth="1"
                borderColor="muted.500"
                w="full"
                py="3"
              >
                <Text
                  color="warmGray.800"
                  fontFamily="Medium"
                  fontSize="md"
                  textAlign="center"
                >
                  Begin building your dream garden!
                </Text>
                <Text mt="1" textAlign="center" color="warmGray.600">
                  Click here to start adding{" "}
                  <Text color="teal.600">Plants</Text>.
                </Text>
                <VStack mt="2">
                  <TouchableOpacity
                    style={styles.addPlantButton}
                    onPress={() => setShowPlantsList(true)}
                  >
                    <AntDesign name="pluscircle" size={30} color="#0d9488" />
                  </TouchableOpacity>
                </VStack>
                <Image
                  source={require("../assets/planting.png")}
                  style={{
                    width: width - 40,
                    height: ((width - 40) / 5) * 2,
                    alignSelf: "center",
                  }}
                />
              </VStack>
            ) : (
              <HStack
                mt="2"
                alignItems="stretch"
                flexWrap="wrap"
                justifyContent="center"
              >
                {userData.garden?.map((plant, i) => {
                  return (
                    <Pressable
                      onLongPress={() => {
                        setPlantToDelete(plant);
                        setShowDeletePlant(true);
                      }}
                      onPress={() => navigation.navigate("Section", plant)}
                      key={plant._id}
                      borderWidth="1"
                      borderRightWidth={i % 2 == 0 ? "0" : "1"}
                      borderBottomWidth={
                        i == userData.garden.length - 1 && i % 2 == 0
                          ? "1"
                          : "0"
                      }
                      borderStyle="dashed"
                      borderColor="warmGray.400"
                      w="1/2"
                      alignItems="center"
                      justifyContent="center"
                      py="2"
                    >
                      <Image
                        style={{ width: 80, height: 80 }}
                        source={{ uri: plant.plantData.image }}
                      />
                    </Pressable>
                  );
                })}
                <VStack
                  borderWidth="1"
                  py="2"
                  borderStyle="dashed"
                  borderColor="warmGray.400"
                  alignItems="center"
                  justifyContent="center"
                  w={userData.garden?.length % 2 == 1 ? "1/2" : "full"}
                >
                  <TouchableOpacity
                    style={styles.addPlantButton}
                    onPress={() => setShowPlantsList(true)}
                  >
                    <AntDesign name="pluscircle" size={30} color="#0d9488" />
                  </TouchableOpacity>
                  {userData.garden?.length % 2 == 0 && (
                    <Text
                      textAlign="center"
                      fontSize="xs"
                      mb="2"
                      mx="3"
                      color="warmGray.600"
                    >
                      To delete a plant from your garden, Long Press on the
                      section.
                    </Text>
                  )}
                </VStack>
              </HStack>
            )}
            {/* soil condition */}
            {userData.soil && (
              <VStack>
                <Divider mt="4" />
                <VStack
                  flex={1}
                  bg={userData.soil == "dry" ? "red.100" : "teal.100"}
                  mt="4"
                  p="3"
                  borderRadius="md"
                >
                  <HStack flex={1} borderColor="red.400">
                    <Image
                      source={require("../assets/watering.png")}
                      style={{ width: 88.4, height: 129 }}
                    />
                    <VStack mx="2" style={{ width: 2 }} bg="black"></VStack>
                    <VStack justifyContent="center" flex={1} mr="2">
                      <Text fontSize="md" fontFamily="Bold">
                        Soil State
                      </Text>
                      <Text fontSize="xs" mb="2" fontFamily="Medium">
                        Last Check :{" "}
                        {moment(userData.soilCheckedAt).format("LLL")}
                      </Text>
                      <Text fontSize="md" fontFamily="Medium">
                        {userData.soil == "dry"
                          ? "The soil appears dry!"
                          : "The soil is moist."}
                      </Text>
                      <Text fontFamily="Regular">
                        {userData.soil == "dry"
                          ? "Please water accordingly."
                          : "Monitor carefully to prevent overwatering."}
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              </VStack>
            )}

            {/* temp chart */}
            <Divider mt="4" />
            {userData.temperature_records.length < 8 ? (
              <VStack>
                <Text
                  color="warmGray.800"
                  fontSize="lg"
                  mt="4"
                  mb="2"
                  fontFamily="SemiBold"
                >
                  Temperature Records
                </Text>
                <VStack bg="teal.500" p="3" borderRadius="md">
                  <Ionicons
                    name="stats-chart"
                    size={60}
                    color="white"
                    style={{ alignSelf: "center", marginVertical: 15 }}
                  />

                  <Text color="white" textAlign="center">
                    Connect your sensor to begin recording temperature. Once
                    connected, you'll be able to track and monitor temperature
                    changes.
                  </Text>
                </VStack>
              </VStack>
            ) : (
              <VStack>
                <Text
                  color="warmGray.800"
                  fontSize="lg"
                  mt="4"
                  fontFamily="SemiBold"
                >
                  Temperature Records
                </Text>
                <Text fontWeight="black" color="teal.600" fontSize="xl">
                  {
                    userData.temperature_records[
                      userData.temperature_records.length - 1
                    ].value
                  }
                  ℃
                </Text>
                <Text fontSize="xs">
                  Last Check on{" "}
                  {moment(
                    userData.temperature_records[
                      userData.temperature_records.length - 1
                    ].date
                  )
                    .format("LLL")
                    .toLowerCase()}
                </Text>
                <LineChartComponent
                  data={userData.temperature_records.slice(-8)}
                  min={0}
                  max={60}
                  sybmol={"°C"}
                  strokeColor="#14b8a6"
                />
              </VStack>
            )}

            {/* tip of the day */}
            <Text
              color="warmGray.800"
              fontSize="lg"
              mt="5"
              fontFamily="SemiBold"
            >
              Tip of the Day
            </Text>
            <Text mt="1" color="warmGray.600" textAlign="justify">
              Remember, patience is a gardener's best friend! Whether you're
              sowing seeds or nurturing young plants, give them the time and
              care they need to flourish. With dedication and a little bit of
              love, your garden will thrive.
            </Text>
            <Divider mt="4" />
            {/* humidity chart */}
            {userData.humidity_records.length < 8 ? (
              <VStack mb="5">
                <Text
                  color="warmGray.800"
                  fontSize="lg"
                  mt="4"
                  mb="2"
                  fontFamily="SemiBold"
                >
                  Humidity Records
                </Text>
                <VStack bg="teal.500" p="3" borderRadius="md">
                  <Ionicons
                    name="stats-chart"
                    size={60}
                    color="white"
                    style={{ alignSelf: "center", marginVertical: 15 }}
                  />

                  <Text color="white" textAlign="center">
                    Connect your sensor to begin recording humidity level. Once
                    connected, you'll be able to track and monitor humidity
                    changes.
                  </Text>
                </VStack>
              </VStack>
            ) : (
              <VStack>
                <Text
                  color="warmGray.800"
                  fontSize="lg"
                  mt="5"
                  fontFamily="SemiBold"
                >
                  Humidity Records
                </Text>
                <Text fontWeight="black" color="#0369a1" fontSize="xl">
                  {
                    userData.humidity_records[
                      userData.humidity_records.length - 1
                    ].value
                  }
                  %
                </Text>
                <Text fontSize="xs">
                  Last Check on{" "}
                  {moment(
                    userData.humidity_records[
                      userData.humidity_records.length - 1
                    ].date
                  )
                    .format("LLL")
                    .toLowerCase()}
                </Text>
                <LineChartComponent
                  data={userData.humidity_records.slice(-8)}
                  min={0}
                  max={100}
                  sybmol="%"
                  strokeColor="#0369a1"
                />
              </VStack>
            )}
          </VStack>
          {/*  this is where we choose a plant to add to the garden */}
          <ActionSheetComponent
            isOpen={showPlantsList}
            onClose={() => setShowPlantsList(false)}
          >
            <VStack>
              <ScrollView showsVerticalScrollIndicator={false}>
                {plantsData.map((plant) => {
                  return (
                    <PlantItem
                      onClose={() => setShowPlantsList(false)}
                      key={plant.name}
                      plant={plant}
                    />
                  );
                })}
              </ScrollView>
            </VStack>
          </ActionSheetComponent>
          {/*  this is the modal to delete a plant on long press it */}
          {plantToDelete && (
            <DeletePlant
              plantToDelete={plantToDelete}
              isOpen={showDeletePlant}
              closeHandler={() => {
                setShowDeletePlant(false);
                setPlantToDelete(null);
              }}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatarContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  addPlantButton: {
    alignSelf: "center",
    width: 80,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
