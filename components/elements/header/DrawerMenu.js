import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, VStack, HStack, ScrollView, Image } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DrawerMenu = ({ navigation }) => {
  const logoutHandler = async () => {
    await AsyncStorage.removeItem("_id");
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <View flex={1} bg="warmGray.200">
      <View>
        <Image
          style={{
            width: 140,
            height: 140,
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
          alt="logo"
          source={require("../../../assets/full_icon.png")}
        />
        <ScrollView>
          <VStack>
            {/** Dashboard */}
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate("Home");
              }}
              style={styles.linkContainer}
            >
              <HStack alignItems="center" style={styles.link} px="3">
                <MaterialIcons name="dashboard" size={26} color="#0d9488" />
                <Text ml="3" color="teal.700" fontFamily="Medium">
                  Dashboard
                </Text>
              </HStack>
            </TouchableOpacity>
            {/** Plants */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Plants");
              }}
              style={styles.linkContainer}
            >
              <HStack alignItems="center" style={styles.link} px="3">
                <MaterialCommunityIcons
                  name="flower-tulip"
                  size={26}
                  color="#0d9488"
                />
                <Text ml="3" color="teal.700" fontFamily="Medium">
                  Plants
                </Text>
              </HStack>
            </TouchableOpacity>
            {/** My Account */}
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate("MyAccount");
              }}
              style={styles.linkContainer}
            >
              <HStack alignItems="center" style={styles.link} px="3">
                <MaterialCommunityIcons
                  name="account-cowboy-hat"
                  size={26}
                  color="#0d9488"
                />
                <Text ml="3" color="teal.700" fontFamily="Medium">
                  My Account
                </Text>
              </HStack>
            </TouchableOpacity>

            {/** Logout */}
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={logoutHandler}
            >
              <HStack alignItems="center" style={styles.link} px="3">
                <MaterialCommunityIcons
                  name="logout"
                  size={28}
                  color="#0d9488"
                />
                <Text ml="3" color="teal.700" fontFamily="Medium">
                  Logout
                </Text>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  link: {
    height: 48,
  },
  linkContainer: {
    backgroundColor: "transparent",
    marginHorizontal: 4,
    marginTop: 5,
    borderRadius: 4,
  },
});
