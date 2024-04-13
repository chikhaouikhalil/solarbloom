import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "native-base";
import { SolidButton } from "./elements/Buttons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SERVER } from "../firebase";
import { setUserData } from "../redux/Actions";

const ModeItem = ({
  mode,
  sectionData,
  currentMode,
  setCurrentMode,
  onClose,
}) => {
  const [loader, setLoader] = useState(loader);
  const { _id } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const chooseMode = async () => {
    if (!loader) {
      setLoader(true);
      axios
        .put(
          `${SERVER}/update-section-mode?user=${_id}&plant=${sectionData._id}`,
          {
            mode: mode.value,
          }
        )
        .then(async () => {
          setCurrentMode(mode);
          await dispatch(setUserData());
          setLoader(false);
          onClose();
        });
    }
  };
  return (
    <View
      borderColor="muted.300"
      borderWidth="1"
      px="2"
      py="3"
      mb="2"
      bg="muted.50"
    >
      <Text fontFamily="SemiBold" color="teal.600">
        {mode.label}{" "}
        {mode.value == currentMode.value ? (
          <Text fontFamily="SemiBold" color="warmGray.900">
            (current mode)
          </Text>
        ) : null}
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: "justify",
          lineHeight: 16,
        }}
        mt="1"
      >
        {mode.description}
      </Text>
      {mode.value != currentMode.value && (
        <SolidButton
          isLoading={loader}
          isLoadingText="Saving mode ..."
          onPress={chooseMode}
          style={{ marginTop: 12 }}
        >
          Select Mode
        </SolidButton>
      )}
    </View>
  );
};

export default ModeItem;

const styles = StyleSheet.create({});
