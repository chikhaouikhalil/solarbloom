import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { HStack, Icon, Text, VStack, View } from "native-base";
import { OutlineButton, SolidButton } from "./elements/Buttons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SERVER } from "../firebase";
import { setUserData } from "../redux/Actions";

const PlantItem = ({ plant, onClose }) => {
  const [addPlantLoader, setAddPlantLoader] = useState(false);
  const { _id } = useSelector((state) => state.userData);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addPlantToGarden = async () => {
    if (!addPlantLoader) {
      setAddPlantLoader(true);
      axios
        .post(`${SERVER}/add-section`, { user: _id, plant: plant._id })
        .then(async (res) => {
          await dispatch(setUserData());
          onClose();
        });
    }
  };
  return (
    <View
      borderColor="muted.300"
      borderWidth="1"
      style={styles.plantItem}
      p="2"
      mb="2"
      bg="muted.50"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          {/** image */}
          <Image
            source={{ uri: plant.image }}
            style={{ width: 100, height: 100 }}
            bg="warmGray.200"
            mr="3"
          />
          {/** name + description */}
          <VStack style={{ flex: 1 }}>
            <Text fontFamily="Bold" color="warmGray.800">
              {plant.name}
            </Text>
            <Text fontFamily="Medium" fontSize="xs" color="warmGray.500">
              {plant.type}
            </Text>
            <VStack>
              <Text color="warmGray.700" fontFamily="SemiBold" fontSize="xs">
                Germination{": "}
                <Text color="teal.900" fontFamily="Regular" fontSize="xs">
                  {`${plant.germination.duration.min}-${plant.germination.duration.max} ${plant.germination.duration.unit}`}
                </Text>
              </Text>
            </VStack>
            <VStack>
              <Text color="warmGray.700" fontFamily="SemiBold" fontSize="xs">
                Harvest{": "}
                <Text color="teal.900" fontFamily="Regular" fontSize="xs">
                  {`${plant.harvest.duration.min}-${plant.harvest.duration.max} ${plant.harvest.duration.unit}`}
                </Text>
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      {/** infos */}
      <HStack mt="1" alignItems="center" justifyContent="space-between">
        <OutlineButton
          style={{ flex: 1, marginHorizontal: 6 }}
          onPress={() => {
            onClose();
            navigation.navigate("Plant", plant);
          }}
        >
          See Details
        </OutlineButton>
        <SolidButton
          style={{ flex: 1, marginHorizontal: 6 }}
          isLoading={addPlantLoader}
          isLoadingText="Adding Plant ..."
          onPress={addPlantToGarden}
        >
          Add to garden
        </SolidButton>
      </HStack>
    </View>
  );
};

export default PlantItem;

const styles = StyleSheet.create({});
