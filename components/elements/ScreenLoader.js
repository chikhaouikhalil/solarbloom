import { Text, View } from "native-base";
import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import * as Animatable from "react-native-animatable";
import { Image } from "react-native";

const ScreenLoader = () => {
  return (
    <Spinner
      visible
      animation="fade"
      cancelable={false}
      overlayColor="rgba(255 , 255, 255, 1)"
      customIndicator={
        <View alignItems="center" justifyContent="center">
          <Animatable.View
            useNativeDriver={true}
            animation="flash"
            delay={0}
            iterationCount="infinite"
            duration={4000}
            easing="linear"
            direction="alternate"
            style={{ marginTop: -30 }}
          >
            <Image
              source={require("../../assets/full_icon.png")}
              style={{ width: 200, height: 200 }}
            />
          </Animatable.View>
        </View>
      }
    />
  );
};

export default ScreenLoader;
