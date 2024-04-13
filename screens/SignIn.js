import { Image, Keyboard, StyleSheet } from "react-native";
import React, { useState } from "react";
import { View, Text, useToast, Icon, VStack } from "native-base";
import { SolidButton } from "../components/elements/Buttons";
import { InputText } from "../components/elements/Inputs";
import { Feather } from "@expo/vector-icons";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import ToastComponent from "../components/elements/ToastComponent";
import { width } from "../utils/GlobalStyle";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER } from "../firebase";
import axios from "axios";
//import { useDispatch } from "react-redux";
//import { setUserData } from "../redux/Actions";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("Linachebbi88@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const toast = useToast();

  const submitHandler = async () => {
    if (!loader) {
      setLoader(true);
      Keyboard.dismiss();
      toast.closeAll();
      axios
        .post(`${SERVER}/users/signin`, {
          email: email.trim().toLocaleLowerCase(),
          password,
        })
        .then(async (res) => {
          const user = res.data;
          await AsyncStorage.setItem("_id", user._id);
          navigation.replace("DrawerNavigator");
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
          if (
            err.response.status === 400 ||
            err.response.status === 403 ||
            err.response.status === 401
          ) {
            toast.show({
              placement: "bottom",
              duration: 2000,
              render: ({ id }) => {
                return (
                  <ToastComponent
                    id={id}
                    closeHandler={() => toast.close(id)}
                    title="Something went wrong"
                    description="Please verify your Login Credentials"
                  />
                );
              },
            });
          } else {
            toast.show({
              placement: "bottom",
              duration: 2000,
              render: ({ id }) => {
                return (
                  <ToastComponent
                    id={id}
                    closeHandler={() => toast.close(id)}
                    title="Something went wrong"
                    description="Verify your Internet connexion"
                  />
                );
              },
            });
          }
        });
    }
  };

  return (
    <View px="3" bg="white" style={styles.container}>
      <VStack my="2">
        <Animatable.View
          animation="fadeInUp"
          easing="linear"
          useNativeDriver={true}
          duration={2000}
          iterationCount={1}
        >
          <Image
            style={{ width: width * 0.5, height: width * 0.5 }}
            source={require("../assets/full_icon.png")}
          />
        </Animatable.View>
      </VStack>
      <InputText
        value={email}
        setValue={setEmail}
        placeholder="Mail address"
        autoComplete="email"
        InputLeftElement={
          <Icon as={Feather} name="mail" size={5} ml={2} color="muted.500" />
        }
      />
      <InputText
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={!showPassword}
        InputLeftElement={
          <Icon as={Feather} name="lock" size={5} ml={2} color="muted.500" />
        }
        InputRightElement={
          showPassword ? (
            <Icon
              onPress={() => setShowPassword(!showPassword)}
              as={Feather}
              name="eye-off"
              size={5}
              mr={2}
              color="muted.500"
            />
          ) : (
            <Icon
              onPress={() => setShowPassword(!showPassword)}
              as={Feather}
              name="eye"
              size={5}
              mr={2}
              color="muted.500"
            />
          )
        }
      />
      <View mt="3" w="full">
        <SolidButton
          onPress={submitHandler}
          isLoading={loader}
          isLoadingText="Connecting ..."
        >
          Login
        </SolidButton>
      </View>

      <Text mt="5" color="dark.100" textAlign="center">
        New Solar Bloomer ?{" "}
        <Text onPress={() => navigation.navigate("SignUp")} color="teal.600">
          Create an account.
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
