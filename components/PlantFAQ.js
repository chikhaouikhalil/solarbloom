import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  UIManager,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { VStack, View, Text } from "native-base";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function PlantFAQ({ faq }) {
  const [active, setActive] = useState(null);
  return (
    <ScrollView>
      {faq.map((x, i) => (
        <Item key={x.id} active={active} i={i} setActive={setActive} x={x} />
      ))}
    </ScrollView>
  );
}

function Item({ i, active, setActive, x }) {
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setActive(i == active ? null : i);
  };
  const open = active == i;
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
      <View style={styles.row}>
        <VStack flex={1} mr="2">
          <Text color="teal.800" fontSize="md" fontFamily="Medium">
            {x.question}
          </Text>
        </VStack>
        <Entypo
          name={open ? "chevron-up" : "chevron-down"}
          size={24}
          color="#737373"
        />
      </View>
      {open && (
        <Text mt="3" mb="1" color="teal.900">
          {x.response}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#737373",
    paddingHorizontal: 10,
    overflow: "hidden",
    paddingVertical: 10,
    marginBottom: 10,
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
