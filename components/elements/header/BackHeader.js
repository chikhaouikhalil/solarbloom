import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon, Pressable, Text } from "native-base";
import React from "react";

const BackHeader = ({ title, children }) => {
  const navigation = useNavigation();
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="warmGray.800"
    >
      <Pressable onPress={() => navigation.goBack()} py="4" px="2">
        <Icon
          as={Ionicons}
          name="arrow-back-sharp"
          size={8}
          color="warmGray.50"
        />
      </Pressable>
      {title && (
        <Text fontSize={16} fontWeight="400" pr="2" color="warmGray.50">
          {title}
        </Text>
      )}
      {children && children}
    </HStack>
  );
};

export default BackHeader;
