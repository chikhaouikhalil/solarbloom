import { Easing, StyleSheet, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { PresenceTransition, View, Pressable } from "native-base";
import { width } from "../../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";

const links = [
  {
    link: "Home",
    label: "Sales",
    icon: (isFocused) => (
      <MaterialCommunityIcons
        name="brightness-percent"
        size={isFocused ? 20 : 24}
        color="white"
      />
    ),
  },
  {
    link: "Reports",
    label: "Reports",
    icon: (isFocused) => (
      <Ionicons
        name="bar-chart-sharp"
        size={isFocused ? 20 : 24}
        color="white"
      />
    ),
  },
  {
    link: "Options",
    label: "Options",
    icon: (isFocused) => (
      <Ionicons name="options" size={isFocused ? 20 : 24} color="white" />
    ),
  },
];

const TabBarComponent = ({ state, descriptors, navigation }) => {
  return (
    <View bg="emerald.600" style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <Pressable
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.link,
              { backgroundColor: isFocused ? "#047857" : "transparent" },
            ]}
          >
            <PresenceTransition
              visible={isFocused}
              initial={{
                opacity: 0.7,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 500,
                  easing: Easing.linear,
                },
              }}
            >
              {links[index].icon(isFocused)}
            </PresenceTransition>
            {isFocused && (
              <PresenceTransition
                style={{
                  width: "100%",

                  alignItems: "center",
                  justifyContent: "center",
                }}
                visible={isFocused}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 500,
                    easing: Easing.linear,
                  },
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginTop: 2,
                    fontFamily: "Regular",
                    fontSize: 12,
                  }}
                >
                  {label}
                </Text>
              </PresenceTransition>
            )}
          </Pressable>
        );
      })}
      <View alignItems="center" justifyContent="center" flex={1} bg="white">
        <LinearGradient
          // Background Linear Gradient
          colors={["#10b981", "#059669", "#059669"]}
          style={{
            width: 60,
            height: 60,

            borderRadius: 30,

            position: "absolute",
            top: -50,
            elevation: 10,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0.5 * 10 },
            shadowOpacity: 0.3,
            shadowRadius: 0.8 * 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable onPress={() => navigation.navigate("AddSale")}>
            <Ionicons name="ios-add-sharp" size={35} color="white" />
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: 0,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  link: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
