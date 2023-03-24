import React from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";

export default function BackgroundImage({children}) {
  return (
    <>
      <ImageBackground
        source={require('../../assets/image/bgImg.jpg')}
        resizeMode="cover"
        style={styles.bgImage}
      >{children}</ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
  },
});
