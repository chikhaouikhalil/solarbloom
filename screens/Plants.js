import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
const { width } = Dimensions.get("window");
import DrawerHeader from "../components/elements/header/DrawerHeader";
import { View, Text, HStack, VStack } from "native-base";
import { OutlineButton } from "../components/elements/Buttons";
import { useSelector } from "react-redux";

const headers = ["Vegetables", "Herbs", "Fruits"];

let animationActive = true;
let animationActiveRef;

export default function Plants({ navigation }) {
  const [active, setActive] = useState(0);
  const headerScrollView = useRef();
  const itemScrollView = useRef();
  const plantsData = useSelector((state) => state.plantsData);

  useEffect(() => {
    headerScrollView.current.scrollToIndex({
      index: active,
      viewPosition: 0.5,
    });
  }, [active]);
  const onPressHeader = (index) => {
    if (animationActiveRef) {
      clearTimeout(animationActiveRef);
    }
    if (active != index) {
      animationActive = false;
      animationActiveRef = setTimeout(() => {
        animationActive = true;
      }, 400);
      itemScrollView.current.scrollToIndex({ index });
      setActive(index);
    }
  };
  const onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    let newIndex = Math.floor(x / width + 0.5);
    if (active != newIndex && animationActive) {
      setActive(newIndex);
    }
  };
  const onMomentumScrollEnd = () => {
    animationActive = true;
  };
  return (
    <View style={styles.container}>
      <DrawerHeader title="Dashboard" date />
      <FlatList
        data={headers}
        ref={headerScrollView}
        keyExtractor={(item) => item}
        horizontal
        style={styles.headerScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => onPressHeader(index)}
              key={item}
              style={[
                styles.headerItem,
                { backgroundColor: active == index ? "#0d9488" : "#e5e5e5" },
              ]}
            >
              <Text
                color={active == index ? "white" : "black"}
                textAlign="center"
              >
                {item}
              </Text>
            </TouchableOpacity>
            {active == index && <View style={styles.headerBar} />}
          </View>
        )}
      />

      <FlatList
        data={headers}
        ref={itemScrollView}
        keyExtractor={(item) => item}
        nestedScrollEnabled={true}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item, index }) => {
          const data =
            item == "Vegetables"
              ? plantsData.filter((el) => el.type == "vegetable")
              : item == "Herbs"
              ? plantsData.filter((el) => el.type == "herb")
              : plantsData.filter((el) => el.type == "fruit");
          return (
            <View key={item} style={styles.mainItem}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                  source={
                    item == "Fruits"
                      ? require("../assets/fruits.png")
                      : item == "Herbs"
                      ? require("../assets/herbs.png")
                      : require("../assets/vegetables.png")
                  }
                  style={{ width: width, height: (width / 5) * 1.5 }}
                />
                <Text
                  textAlign="center"
                  color="black"
                  fontFamily="Bold"
                  fontSize="lg"
                  mb="3"
                >
                  {item}
                </Text>

                {data.map((plant) => {
                  return (
                    <View
                      shadow="1"
                      borderWidth="0"
                      style={styles.plantItem}
                      mx="2"
                      py="6"
                      px="3"
                      mb="2"
                      key={plant.name}
                    >
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center">
                          {/** image */}
                          <Image
                            source={{ uri: plant.image }}
                            style={{ width: 80, height: 80, marginRight: 10 }}
                            bg="warmGray.200"
                          />
                          {/** name + description */}
                          <VStack style={{ flex: 1 }}>
                            <Text fontFamily="Bold" color="warmGray.800">
                              {plant.name}
                            </Text>
                            <Text
                              fontFamily="Medium"
                              fontSize="xs"
                              color="warmGray.500"
                            >
                              {plant.species}
                            </Text>
                            <Text
                              mt="2"
                              fontFamily="Light"
                              numberOfLines={3}
                              fontSize="xs"
                              color="warmGray.800"
                            >
                              {plant.description}
                            </Text>
                          </VStack>
                        </HStack>
                      </HStack>
                      {/** infos */}
                      <VStack mt="4">
                        <HStack alignItems="center" bg="gray.50" py="2">
                          {/** germination */}
                          <HStack
                            w="1/2"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Image
                              source={require("../assets/germination.png")}
                              style={{ width: 60, height: 90 }}
                            />

                            <VStack ml="3">
                              <Text
                                color="warmGray.700"
                                fontFamily="SemiBold"
                                fontSize="xs"
                              >
                                Germination
                              </Text>
                              <Text
                                color="teal.700"
                                fontFamily="Regular"
                                fontSize="xs"
                              >
                                {`${plant.germination.duration.min}-${plant.germination.duration.max} ${plant.germination.duration.unit}`}
                              </Text>
                            </VStack>
                          </HStack>
                          {/** harvest */}
                          <HStack
                            w="1/2"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Image
                              source={require("../assets/harvest.png")}
                              style={{ width: 60, height: 90 }}
                            />
                            <VStack ml="2">
                              <Text
                                color="warmGray.700"
                                fontFamily="SemiBold"
                                fontSize="xs"
                              >
                                Harvest
                              </Text>
                              <Text
                                color="teal.700"
                                fontFamily="Regular"
                                fontSize="xs"
                              >
                                {`${plant.harvest.duration.min}-${plant.harvest.duration.max} ${plant.harvest.duration.unit}`}
                              </Text>
                            </VStack>
                          </HStack>
                        </HStack>
                        <HStack mt="2">
                          <OutlineButton
                            onPress={() => navigation.navigate("Plant", plant)}
                          >
                            See Details
                          </OutlineButton>
                        </HStack>
                      </VStack>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerScroll: {
    flexGrow: 0,
  },
  headerItem: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 3,
    height: 55,
  },
  mainItem: {
    width: width,
  },
  headerBar: {
    height: 4,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#5eead4",
    position: "absolute",
    bottom: 0,
  },
});
