import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Text, VStack, View } from "native-base";
import moment from "moment";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TabHeader = ({ role }) => {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const today = new Date();
  const day = days[today.getDay()];
  const navigation = useNavigation();
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="indigo.700"
      px="2"
      style={{ height: 70 }}
    >
      <HStack alignItems="center" space="1.5">
        <MaterialCommunityIcons name="calendar-today" size={35} color="white" />
        <View>
          <Text color="white" fontWeight="400" style={{ fontSize: 18 }}>
            {day}
          </Text>
          <Text
            color="warmGray.200"
            mt="-0.5"
            fontWeight="200"
            style={{ fontSize: 14 }}
          >
            {moment(today).format("DD/MM/YYYY")}
          </Text>
        </View>
      </HStack>
      <VStack></VStack>
      {role == "admin" && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Scanner");
          }}
          style={styles.logoutButton}
        >
          <AntDesign name="qrcode" size={24} color="white" />
        </TouchableOpacity>
      )}
    </HStack>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  logoutButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
