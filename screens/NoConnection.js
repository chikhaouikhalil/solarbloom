import { StyleSheet } from "react-native";
import React from "react";
import { Text, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { OutlineButton } from "../components/elements/Buttons";

const NoConnection = ({ navigation }) => {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="white">
      <VStack px="3">
        <VStack style={{ alignSelf: "center" }}>
          <MaterialIcons name="wifi-off" size={150} color="#999" />
        </VStack>
        <Text
          mt="3"
          fontFamily="Medium"
          fontSize="lg"
          color="teal.700"
          textAlign="center"
        >
          Oops! It seems like you're offline.
        </Text>
        <Text mt="2" color="warmGray.600" textAlign="center" fontSize="xs">
          Please check your connection and try again.
        </Text>
        <VStack mt="2">
          <OutlineButton onPress={() => navigation.replace("DrawerNavigator")}>
            Retry
          </OutlineButton>
        </VStack>
      </VStack>
    </View>
  );
};

export default NoConnection;

const styles = StyleSheet.create({});
