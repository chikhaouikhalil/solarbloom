import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { HStack, Pressable, ScrollView, Text, VStack, View } from "native-base";
import BackHeader from "../components/elements/BackHeader";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { ActionSheetComponent } from "../components/elements/ActionSheet";
import ModeItem from "../components/ModeItem";

import PlantFAQ from "../components/PlantFAQ";
import { width } from "../utils/GlobalStyle";
import { ProgressCircle } from "react-native-svg-charts";
import PlantGrowth from "../components/PlantGrowth";

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
        <HStack bg="transparent">
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
        {/* choose mode */}
        <Pressable
          onPress={() => setShowModesList(true)}
          bg="gray.50"
          py="2"
          px="3"
        >
          <HStack
            alignItems="center"
            justifyContent="space-between"
            mt="2"
            mb="1.5"
          >
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
        {/** name & description */}
        <VStack px="3" mt="3">
          <Text
            color="teal.600"
            fontFamily="Black"
            fontSize="2xl"
            textAlign="center"
          >
            {plantData.name}
          </Text>
          <Text
            color="teal.900"
            fontFamily="Light"
            fontSize="md"
            textAlign="center"
          >
            {plantData.species}
          </Text>
          <Text color="warmGray.600" fontSize="sm" mt="4" textAlign="justify">
            {plantData.description}
          </Text>
          {/* cards */}
          <Text color="warmGray.600" fontSize="lg" my="3" fontFamily="SemiBold">
            Quick Info
          </Text>
          <VStack>
            <HStack
              alignItems="stretch"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {/* sun */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/sun.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Sun
                </Text>
                <Text textAlign="center" mb="2" color="teal.900" fontSize="xs">
                  {plantData.sun}
                </Text>
              </VStack>
              {/* water */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/water.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Water
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.watering.min}-${plantData.watering.max} ${plantData.watering.unit}`}</Text>
              </VStack>
              {/* depth */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/depth.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Depth
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.planting.depth.min}-${plantData.planting.depth.max} ${plantData.planting.depth.unit}`}</Text>
              </VStack>
              {/* spacing */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                mt="2"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/spacing.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Spacing
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.planting.spacing.min}-${plantData.planting.spacing.max} ${plantData.planting.spacing.unit}`}</Text>
              </VStack>
              {/* harvest */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                mt="2"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/harvest1.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Harvest
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.harvest.duration.min}-${plantData.harvest.duration.max} ${plantData.harvest.duration.unit}`}</Text>
              </VStack>
              {/* temperature */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                mt="2"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/temp.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Temperature
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.temperature.min}-${plantData.temperature.max} ${plantData.temperature.unit}`}</Text>
              </VStack>
              {/* sun */}
              <VStack
                mt="2"
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/soil.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Soil Impact
                </Text>
                <Text textAlign="center" mb="2" color="teal.900" fontSize="xs">
                  {plantData.soilImpact}
                </Text>
              </VStack>
              {/* Yield */}
              <VStack
                borderWidth="1"
                borderColor="muted.400"
                borderRadius="md"
                mt="2"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: width * 0.15, height: width * 0.15 }}
                  source={require("../assets/yield.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Yield
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plantData.yield.value} ${plantData.yield.unit}`}</Text>
              </VStack>
              <VStack
                mt="2"
                borderWidth="1"
                borderColor="transparent"
                borderRadius="md"
                w={width * 0.3}
                alignItems="center"
                justifyContent="center"
              ></VStack>
            </HStack>
          </VStack>
          {/* Germination */}
          <Text color="warmGray.600" fontSize="lg" mt="5" fontFamily="SemiBold">
            Germination
          </Text>

          <Text color="warmGray.600" fontSize="sm" mt="2" textAlign="justify">
            {plantData.germination.description}
          </Text>
          {/* rate germination */}
          <VStack alignSelf="center" mt="4">
            <VStack style={{ width: 80, height: 80, alignSelf: "center" }}>
              <VStack>
                <ProgressCircle
                  style={{ height: 80 }}
                  progress={plantData.germination.rate}
                  progressColor="#14b8a6"
                  startAngle={-Math.PI * 0.95}
                  endAngle={Math.PI * 0.95}
                  strokeWidth={6}
                />
              </VStack>
              <VStack
                style={{
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                position="absolute"
              >
                <Text color="teal.500" fontFamily="Bold" fontSize="md">
                  {plantData.germination.rate * 100}%
                </Text>
              </VStack>
            </VStack>
            <Text color="teal.600" mt="1">
              Germination Success Rate
            </Text>
          </VStack>
          {/* neighbours */}
          <VStack>
            <Text
              color="warmGray.600"
              fontSize="lg"
              mt="2"
              mb="3"
              fontFamily="SemiBold"
            >
              Neighbours
            </Text>
            <HStack justifyContent="space-between">
              {/* companion plants */}
              <VStack w="1/2" bg="#ccfbf180" px="2" py="4">
                <HStack alignItems="center" justifyContent="center" mb="2">
                  <Image
                    source={require("../assets/good.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    ml="2"
                    color="warmGray.600"
                    fontSize="md"
                    fontFamily="Medium"
                  >
                    Companion
                  </Text>
                </HStack>
                <VStack style={{ alignItems: "center" }}>
                  {plantData.companion.map((el) => (
                    <Text color="warmGray.600" key={el}>
                      ◉ {el}
                    </Text>
                  ))}
                </VStack>
              </VStack>
              {/* combative plants */}
              <VStack w="1/2" bg="#fee2e280" px="2" py="4">
                <HStack alignItems="center" justifyContent="center" mb="2">
                  <Image
                    source={require("../assets/bad.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    ml="2"
                    color="warmGray.600"
                    fontSize="md"
                    fontFamily="Medium"
                  >
                    Combative
                  </Text>
                </HStack>
                <VStack style={{ alignItems: "center" }}>
                  {plantData.combative.map((el) => (
                    <Text color="warmGray.600" key={el}>
                      ◉ {el}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          </VStack>
          {/* Growth */}
          <VStack>
            <Text
              color="warmGray.600"
              fontSize="lg"
              mt="4"
              fontFamily="SemiBold"
            >
              Length of Plant (in inches) per {plantData.growth.unit}
            </Text>
            <Text color="teal.600"></Text>
            <PlantGrowth data={plantData.growth.data} />
          </VStack>
          {/* Pests and diseases */}
          <VStack>
            <Text
              color="warmGray.600"
              fontSize="lg"
              mt="2"
              mb="3"
              fontFamily="SemiBold"
            >
              Pests and Diceases
            </Text>
            <HStack justifyContent="space-between">
              {/* pests  */}
              <VStack w="1/2" bg="muted.50" px="2" py="4">
                <HStack alignItems="center" justifyContent="center" mb="2">
                  <Image
                    source={require("../assets/pest.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    ml="2"
                    color="warmGray.600"
                    fontSize="md"
                    fontFamily="Medium"
                  >
                    Pests
                  </Text>
                </HStack>
                <VStack style={{ alignItems: "center" }}>
                  {plantData.pests.map((el) => (
                    <Text color="warmGray.600" key={el}>
                      ◉ {el}
                    </Text>
                  ))}
                </VStack>
              </VStack>
              {/* diseases */}
              <VStack w="1/2" bg="muted.100" px="2" py="4">
                <HStack alignItems="center" justifyContent="center" mb="2">
                  <Image
                    source={require("../assets/disease.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    ml="2"
                    color="warmGray.600"
                    fontSize="md"
                    fontFamily="Medium"
                  >
                    Diseases
                  </Text>
                </HStack>
                <VStack style={{ alignItems: "center" }}>
                  {plantData.diseases.map((el) => (
                    <Text color="warmGray.600" key={el}>
                      ◉ {el}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          </VStack>

          {/* faq */}
          <VStack my="5">
            <Text
              color="warmGray.600"
              fontSize="lg"
              mb="4"
              fontFamily="SemiBold"
            >
              Frequently asked question (FAQ)
            </Text>
            <PlantFAQ faq={plantData.faq} />
          </VStack>
        </VStack>
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
