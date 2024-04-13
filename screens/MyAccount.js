import { StyleSheet, Image, Keyboard } from "react-native";
import React, { useState } from "react";
import {
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import BackHeader from "../components/elements/BackHeader";
import { width } from "../utils/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { CheckBoxComponent, InputText } from "../components/elements/Inputs";
import { Feather } from "@expo/vector-icons";
import { SolidButton } from "../components/elements/Buttons";
import axios from "axios";
import ToastComponent from "../components/elements/ToastComponent";

import { setUserData } from "../redux/Actions";
import { SERVER } from "../firebase";
import SwitchComponent from "../components/elements/SwitchComponent";

const MyAccount = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(userData.firstname);
  const [lastname, setLastname] = useState(userData.lastname);
  const [email, setEmail] = useState(userData.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [generalLoader, setGeneralLoader] = useState(false);
  const [changePasswordLoader, setChangePasswordLoader] = useState(false);
  const [notification, setNotification] = useState(
    // userData.accept_notifications
    true
  );

  const toast = useToast();

  const updateGeneralInfo = async () => {
    if (!generalLoader) {
      Keyboard.dismiss();
      toast.closeAll();
      setGeneralLoader(true);
      axios
        .put(`${SERVER}/users/update-user?user=${userData._id}`, {
          firstname,
          lastname,
        })
        .then(async () => {
          await dispatch(setUserData());
          setGeneralLoader(false);
          toast.show({
            placement: "bottom",
            duration: 2000,
            render: ({ id }) => {
              return (
                <ToastComponent
                  status="success"
                  id={id}
                  closeHandler={() => toast.close(id)}
                  title="Success"
                  description="your General Informations have been updated"
                />
              );
            },
          });
        })
        .catch((error) => {
          setGeneralLoader(false);
          toast.show({
            placement: "bottom",
            duration: 2000,
            render: ({ id }) => {
              return (
                <ToastComponent
                  id={id}
                  closeHandler={() => toast.close(id)}
                  title="Something went wrong"
                  description="Verify Your Internet Connexion"
                />
              );
            },
          });
        });
    }
  };

  const changePassword = async () => {
    if (!changePasswordLoader) {
      setChangePasswordLoader(true);
      if (password.length < 6) {
        setChangePasswordLoader(false);
        toast.show({
          placement: "bottom",
          duration: 2000,
          render: ({ id }) => {
            return (
              <ToastComponent
                id={id}
                closeHandler={() => toast.close(id)}
                title="Password change failed."
                description="New password must have at least 6 chars"
              />
            );
          },
        });
      } else if (password != confirmPassword) {
        setChangePasswordLoader(false);
        toast.show({
          placement: "bottom",
          duration: 2000,
          render: ({ id }) => {
            return (
              <ToastComponent
                id={id}
                closeHandler={() => toast.close(id)}
                title="Password change failed."
                description="New password and confirm password do not match"
              />
            );
          },
        });
      } else {
        axios
          .put(`${SERVER}/users/change-password?user=${userData._id}`, {
            currentPassword,
            password,
          })
          .then(async () => {
            setChangePasswordLoader(false);
            toast.show({
              placement: "bottom",
              duration: 2000,
              render: ({ id }) => {
                return (
                  <ToastComponent
                    status="success"
                    id={id}
                    closeHandler={() => toast.close(id)}
                    title="Success"
                    description="your password have been updated"
                  />
                );
              },
            });
          })
          .catch((err) => {
            setChangePasswordLoader(false);
            if (err.response.status === 403) {
              toast.show({
                placement: "bottom",
                duration: 2000,
                render: ({ id }) => {
                  return (
                    <ToastComponent
                      id={id}
                      closeHandler={() => toast.close(id)}
                      title="Incorrect Password"
                      description="Please verify your password"
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
    }
  };
  return (
    <View flex={1}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackHeader title="My account" />
        <Image
          source={require("../assets/home1.png")}
          style={{ width: width, height: (width / 5) * 2 }}
        />
        <VStack px="3">
          {/* general infos : firstname lastname and email */}
          <VStack borderBottomWidth="1" borderColor="warmGray.300" pb="4">
            <Text
              color="warmGray.600"
              fontSize="lg"
              mb="1"
              fontFamily="SemiBold"
            >
              General informations
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
              isDisabled={true}
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
            <VStack mt="2">
              <SolidButton
                onPress={updateGeneralInfo}
                isLoading={generalLoader}
                isLoadingText="Saving Infos ..."
              >
                Save changes
              </SolidButton>
            </VStack>
          </VStack>
          {/* notifications */}
          <HStack
            borderBottomWidth="1"
            borderColor="gray.100"
            w="full"
            py="5"
            alignItems="center"
            justifyContent="space-between"
          >
            <VStack>
              <Text color="warmGray.600" fontSize="lg" fontFamily="SemiBold">
                Notifications
              </Text>
            </VStack>
            <VStack>
              <SwitchComponent
                toggleActive={notification}
                setToggle={setNotification}
              />
            </VStack>
          </HStack>
          {/** security */}
          <VStack
            borderBottomWidth="1"
            borderColor="warmGray.300"
            mt="4"
            pb="4"
          >
            <Text
              color="warmGray.600"
              fontSize="lg"
              mb="1"
              fontFamily="SemiBold"
            >
              Change password
            </Text>
            <InputText
              value={currentPassword}
              setValue={setCurrentPassword}
              placeholder="Current Password"
              secureTextEntry={!showCurrentPassword}
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
                showCurrentPassword ? (
                  <Icon
                    onPress={() => setShowConfirmPassword(!showCurrentPassword)}
                    as={Feather}
                    name="eye-off"
                    size={5}
                    mr={2}
                    color="muted.500"
                  />
                ) : (
                  <Icon
                    onPress={() => setShowConfirmPassword(!showCurrentPassword)}
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
              value={password}
              setValue={setPassword}
              placeholder="New Password"
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
              placeholder="Confirm new password"
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
            <VStack mt="2">
              <SolidButton
                onPress={changePassword}
                isLoading={changePasswordLoader}
                isLoadingText="Changing password ..."
              >
                update password
              </SolidButton>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({});
