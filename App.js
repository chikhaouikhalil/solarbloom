import "react-native-gesture-handler";
import { NativeBaseProvider, Text, View, extendTheme } from "native-base";
import { StyleSheet, StatusBar, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignIn from "./screens/SignIn";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Section from "./screens/Section";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import SignUp from "./screens/SignUp";
import store from "./redux/store";
import { Provider } from "react-redux";
import DrawerMenu from "./components/elements/header/DrawerMenu";
import Plants from "./screens/Plants";
import Plant from "./screens/Plant";
import MyAccount from "./screens/MyAccount";
import NoConnection from "./screens/NoConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [fontsLoaded] = useFonts({
    Black: require("./assets/fonts/Poppins-Black.ttf"),
    Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    Light: require("./assets/fonts/Poppins-Light.ttf"),
    Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Thin: require("./assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    const getUserData = async () => {
      const _id = await AsyncStorage.getItem("_id");
      console.log("_id", _id);
      if (_id) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    };
    getUserData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const customTheme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: "light",
    },
    fontConfig: {
      OpenSans: {
        100: {
          normal: "Thin",
          italic: "Thin",
        },
        200: {
          normal: "ExtraLight",
          italic: "ExtraLight",
        },
        300: {
          normal: "Light",
          italic: "Light",
        },
        400: {
          normal: "Regular",
          italic: "Regular",
        },
        500: {
          normal: "Medium",
          italic: "Medium",
        },
        600: {
          normal: "SemiBold",
          italic: "SemiBold",
        },
        700: {
          normal: "Bold",
          italic: "Bold",
        },
        800: {
          normal: "ExtraBold",
          italic: "ExtraBold",
        },
        900: {
          normal: "Black",
          italic: "Black",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Medium",
      body: "Regular",
      mono: "Light",
    },
  });

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerMenu {...props} />}
      >
        <Drawer.Screen component={Home} name="Home" />
        <Drawer.Screen component={Plants} name="Plants" />
        <Drawer.Screen component={MyAccount} name="MyAccount" />
      </Drawer.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <NativeBaseProvider theme={customTheme} config={config}>
          <StatusBar barStyle="light-content" backgroundColor="#0d9488" />
          <View style={{ flex: 1 }} onLayout={onLayoutRootView} bg="white">
            <Stack.Navigator
              initialRouteName={isConnected ? "DrawerNavigator" : "SignIn"}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen component={NoConnection} name="NoConnection" />
              <Stack.Screen component={SignIn} name="SignIn" />

              <Stack.Screen component={SignUp} name="SignUp" />
              <Drawer.Screen component={Plant} name="Plant" />
              <Drawer.Screen component={Section} name="Section" />
              <Stack.Screen
                component={DrawerNavigator}
                name="DrawerNavigator"
              />
            </Stack.Navigator>
          </View>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
