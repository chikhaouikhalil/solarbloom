import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import { MenuIcon } from "../../../assets/svg/Icons";
import { colors } from "../../../utils/GlobalStyle";
import moment from "moment";

const DrawerHeader = ({ RightSection, title, date }) => {
  const navigation = useNavigation();
  const DateComponent = () => {
    return (
      <VStack mr="2">
        <Text fontSize="md" color="warmGray.50">
          {moment().format("dddd")}
        </Text>
        <Text fontSize="xs" letterSpacing="lg" color="warmGray.100">
          {moment().format("ll")}
        </Text>
      </VStack>
    );
  };
  return (
    <HStack alignItems="center" justifyContent="space-between" bg="teal.600">
      <HStack alignItems="center">
        <Pressable onPress={() => navigation.openDrawer()} py="4" px="2">
          <VStack w="8" h="8">
            <MenuIcon />
          </VStack>
        </Pressable>
        {title && (
          <Text ml="1" color="warmGray.50" fontSize={16} fontWeight="400">
            {title}
          </Text>
        )}
      </HStack>
      {date && <DateComponent />}
      {RightSection && RightSection()}
    </HStack>
  );
};

export default DrawerHeader;
