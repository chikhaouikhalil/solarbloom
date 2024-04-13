import { Keyboard, ScrollView } from "react-native";
import React, { useState } from "react";
import { Icon, Text, View, useToast } from "native-base";
import BackHeader from "../components/elements/BackHeader";
import { CheckBoxComponent, InputText } from "../components/elements/Inputs";
import { Feather } from "@expo/vector-icons";
import { SolidButton } from "../components/elements/Buttons";
import ToastComponent from "../components/elements/ToastComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER } from "../firebase";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(false);
  const toast = useToast();

  //const dispatch = useDispatch();

  const submitHandler = async () => {
    if (!loader) {
      setLoader(true);
      Keyboard.dismiss();
      toast.closeAll();

      axios
        .post(`${SERVER}/users/signup`, {
          email: email.trim().toLocaleLowerCase(),
          firstname,
          lastname,
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
          if (err.response.status === 409) {
            toast.show({
              placement: "bottom",
              duration: 2000,
              render: ({ id }) => {
                return (
                  <ToastComponent
                    id={id}
                    closeHandler={() => toast.close(id)}
                    title="User exist with provided email"
                    description="Please login with your Login Credentials"
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
    <View flex={1} bg="gray.50">
      <BackHeader title="Sign UP" />
      <ScrollView keyboardShouldPersistTaps="always">
        <View px="3">
          <Text
            color="teal.700"
            fontSize={18}
            fontFamily="body"
            textAlign="center"
            fontWeight="500"
            mt="4"
            mb="2"
          >
            Create new account
          </Text>
          <InputText
            value={firstname}
            setValue={setFirstname}
            placeholder="Firstname"
            InputLeftElement={
              <Icon
                as={Feather}
                name="user"
                size={5}
                ml={2}
                color="muted.500"
              />
            }
          />
          <InputText
            value={lastname}
            setValue={setLastname}
            placeholder="Lastname"
            InputLeftElement={
              <Icon
                as={Feather}
                name="users"
                size={5}
                ml={2}
                color="muted.500"
              />
            }
          />
          <InputText
            autoComplete="email"
            value={email}
            setValue={setEmail}
            placeholder="Mail address"
            InputLeftElement={
              <Icon
                as={Feather}
                name="mail"
                size={5}
                ml={2}
                color="muted.500"
              />
            }
          />
          <InputText
            value={password}
            setValue={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            InputLeftElement={
              <Icon
                as={Feather}
                name="lock"
                size={5}
                ml={2}
                color="muted.500"
              />
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
          <InputText
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Confirm password"
            secureTextEntry={!showConfirmPassword}
            InputLeftElement={
              <Icon
                as={Feather}
                name="lock"
                size={5}
                ml={2}
                color="muted.500"
              />
            }
            InputRightElement={
              showConfirmPassword ? (
                <Icon
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  as={Feather}
                  name="eye-off"
                  size={5}
                  mr={2}
                  color="muted.500"
                />
              ) : (
                <Icon
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  as={Feather}
                  name="eye"
                  size={5}
                  mr={2}
                  color="muted.500"
                />
              )
            }
          />
          <View mt="3">
            <CheckBoxComponent value={checked} setValue={setChecked}>
              <Text color="dark.200" _important={{ fontSize: 13, flex: 1 }}>
                By checking this box, you confirm that you have read and agree
                to the{" "}
                <Text _important={{ fontSize: 13, flex: 1, color: "teal.600" }}>
                  Privacy Policy
                </Text>{" "}
                and{" "}
                <Text _important={{ fontSize: 13, flex: 1, color: "teal.600" }}>
                  Terms and Conditions.
                </Text>
              </Text>
            </CheckBoxComponent>
          </View>
          <View mt="3">
            <SolidButton
              disabled={!checked || firstname.length < 2 || lastname.length < 2}
              onPress={submitHandler}
              isLoading={loader}
              isLoadingText="Creating account ..."
            >
              Sign UP
            </SolidButton>
          </View>
        </View>

        <Text mt="5" color="dark.100" textAlign="center">
          Already have a account ?{" "}
          <Text onPress={() => navigation.goBack()} color="teal.600">
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;
