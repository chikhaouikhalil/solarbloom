import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { HStack, Pressable, ScrollView, Text, VStack, View } from "native-base";
import BackHeader from "../components/elements/BackHeader";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { ActionSheetComponent } from "../components/elements/ActionSheet";
import ModeItem from "../components/ModeItem";
import SectionCharts from "../components/SectionCharts";

const Section = ({ navigation, route }) => {
  const sectionData = route.params;
  const plantData = sectionData.plantData;

  const modes = [
    {
      value: "auto",
      label: "Automatic mode",
      description:
        "The Automatic Mode is a smart and adaptive setting that allows the system to dynamically adjust watering schedules, light exposure, and other parameters based on real-time conditions. It offers a hassle-free approach to plant care, where the system intelligently responds to the specific needs of your garden without manual intervention.",
    },
    {
      value: "water_saving",
      label: "Water-Saving mode",
      description:
        "The Water-Saving Mode is an eco-conscious setting that minimizes water usage while still maintaining adequate hydration for your plants. This mode is suitable for times when you want to conserve water resources without compromising the well-being of your garden.",
    },
    {
      value: "max_growth",
      label: "Maximum Growth mode",
      description:
        "The Maximum Growth Mode is tailored to promote accelerated growth and development in your plants. It optimizes watering, nutrient levels, and environmental conditions to create an ideal setting for maximum plant growth. Use this mode when you want to foster robust and vigorous plant development.",
    },
    {
      value: "vacation",
      label: "Vacation mode",
      description:
        "The Vacation Mode is designed for when you're away from your garden for an extended period. It optimizes your plant care routine for minimal water consumption and maintenance. This mode ensures that your plants receive the necessary care without overusing resources during your absence.",
    },
  ];

  const [showModesList, setShowModesList] = useState(false);
  const [currentMode, setCurrentMode] = useState(
    modes.find((el) => el.value == sectionData.mode)
  );
  return (
    <View flex={1} bg="white">
      <BackHeader title="Garden section" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** general plant bar */}
        <HStack bg="gray.100">
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: plantData.image }}
          />
          <VStack ml="1" flex={1} justifyContent="center">
            <Text color="warmGray.900" fontFamily="Medium">
              {plantData.name}
            </Text>
            <Text color="warmGray.700">{plantData.species}</Text>
            <Text color="warmGray.500" fontSize="xs" fontFamily="Light">
              Section created on {moment(sectionData.createdAt).format("LLL")}
            </Text>
          </VStack>
        </HStack>
        {/* temperature and humidity */}
        <HStack>
          {/* temp */}
          <HStack
            p="2"
            alignItems="center"
            flex={1}
            borderBottomWidth="1"
            borderColor="muted.200"
          >
            <VStack>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../assets/temp.png")}
              />
            </VStack>
            <VStack flex={1}>
              <Text color="red.600" fontFamily="Black">
                Temperature
              </Text>
              <Text color="warmGray.600" fontSize="sm" fontFamily="Medium">
                60 ℃
              </Text>
            </VStack>
          </HStack>
          {/* humidity */}
          <HStack
            p="2"
            alignItems="center"
            flex={1}
            borderBottomWidth="1"
            borderColor="muted.200"
          >
            <VStack>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../assets/humidity.png")}
              />
            </VStack>
            <VStack flex={1}>
              <Text color="#26aad9" fontFamily="Black">
                Humidity
              </Text>
              <Text color="warmGray.600" fontSize="sm" fontFamily="Medium">
                80 %
              </Text>
            </VStack>
          </HStack>
        </HStack>
        {/* choose mode */}
        <Pressable
          onPress={() => setShowModesList(true)}
          bg="gray.50"
          py="2"
          px="3"
        >
          <HStack alignItems="center" justifyContent="space-between">
            <VStack flex={1}>
              <Text>
                <Text color="teal.600" fontFamily="Medium">
                  Current mode :{" "}
                </Text>
                {currentMode.label}
              </Text>
            </VStack>
            <VStack>
              <MaterialIcons name="settings" size={28} color="#0d9488" />
            </VStack>
          </HStack>
          <Text
            style={{ fontSize: 12, textAlign: "justify", lineHeight: 16 }}
            mt="2"
          >
            {currentMode.description}
          </Text>
        </Pressable>
        {/* Charts section */}
        <SectionCharts />
      </ScrollView>
      {/*  this is where we choose a plant to add to the garden */}
      <ActionSheetComponent
        isOpen={showModesList}
        onClose={() => setShowModesList(false)}
      >
        <VStack mb="5">
          <ScrollView showsVerticalScrollIndicator={false}>
            {modes.map((m) => {
              return (
                <ModeItem
                  key={m.value}
                  mode={m}
                  sectionData={sectionData}
                  currentMode={currentMode}
                  setCurrentMode={setCurrentMode}
                  onClose={() => setShowModesList(false)}
                />
              );
            })}
          </ScrollView>
        </VStack>
      </ActionSheetComponent>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
