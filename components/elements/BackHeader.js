import { StyleSheet } from "react-native";
import React from "react";
import { HStack, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const BackHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <HStack
      bg="teal.600"
      pr="3"
      h="16"
      alignItems="center"
      justifyContent="space-between"
      w="full"
    >
      <Pressable
        px="3"
        h="full"
        onPress={() => navigation.goBack()}
        alignItems="center"
        justifyContent="center"
      >
        <Ionicons name="ios-arrow-back-outline" size={30} color="white" />
      </Pressable>
      <Text color="white" fontSize="lg">
        {title}
      </Text>
    </HStack>
  );
};

export default BackHeader;

const styles = StyleSheet.create({});
