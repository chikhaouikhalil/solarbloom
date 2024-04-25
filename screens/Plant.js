import { StyleSheet, Image } from "react-native";
import React from "react";
import { HStack, ScrollView, Text, VStack, View } from "native-base";
import BackHeader from "../components/elements/BackHeader";
import { width } from "../utils/GlobalStyle";
import { ProgressCircle } from "react-native-svg-charts";
import PlantFAQ from "../components/PlantFAQ";
import PlantGrowth from "../components/PlantGrowth";

const Plant = ({ navigation, route }) => {
  const plant = route.params;
  return (
    <View flex={1}>
      <BackHeader title={plant.name} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{
            width: width * 0.7,
            height: width * 0.7,
            alignSelf: "center",
          }}
          source={{ uri: plant.image }}
        />
        {/** name & description */}
        <VStack px="3">
          <Text
            color="teal.600"
            fontFamily="Black"
            fontSize="2xl"
            textAlign="center"
          >
            {plant.name}
          </Text>
          <Text
            color="teal.900"
            fontFamily="Light"
            fontSize="md"
            textAlign="center"
          >
            {plant.species}
          </Text>
          <Text color="warmGray.600" fontSize="sm" mt="4" textAlign="justify">
            {plant.description}
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
                  {plant.sun}
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
                >{`${plant.watering.min}→${plant.watering.max} ${plant.watering.unit}`}</Text>
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
                >{`${plant.planting.depth.min}→${plant.planting.depth.max} ${plant.planting.depth.unit}`}</Text>
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
                >{`${plant.planting.spacing.min}→${plant.planting.spacing.max} ${plant.planting.spacing.unit}`}</Text>
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
                >{`${plant.harvest.duration.min}→${plant.harvest.duration.max} ${plant.harvest.duration.unit}`}</Text>
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
                >{`${plant.temperature.min}→${plant.temperature.max} ${plant.temperature.unit}`}</Text>
              </VStack>
              {/* humidity */}
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
                  source={require("../assets/humidity.png")}
                />
                <Text textAlign="center" color="warmGray.900">
                  Humidity
                </Text>
                <Text
                  textAlign="center"
                  mb="2"
                  color="teal.900"
                  fontSize="xs"
                >{`${plant.humidity.min}→${plant.humidity.max} ${plant.humidity.unit}`}</Text>
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
                  {plant.soilImpact}
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
                >{`${plant.yield.value} ${plant.yield.unit}`}</Text>
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
            {plant.germination.description}
          </Text>
          {/* rate germination */}
          <VStack alignSelf="center" mt="4">
            <VStack style={{ width: 80, height: 80, alignSelf: "center" }}>
              <VStack>
                <ProgressCircle
                  style={{ height: 80 }}
                  progress={plant.germination.rate}
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
                  {plant.germination.rate * 100}%
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
                  {plant.companion.map((el) => (
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
                  {plant.combative.map((el) => (
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
              Length of Plant (in inches) per {plant.growth.unit}
            </Text>
            <Text color="teal.600"></Text>
            <PlantGrowth data={plant.growth.data} />
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
                  {plant.pests.map((el) => (
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
                  {plant.diseases.map((el) => (
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
            <PlantFAQ faq={plant.faq} />
          </VStack>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default Plant;

const styles = StyleSheet.create({});
