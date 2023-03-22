import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

import image from "../../assets/image/bgImg.jpg";
const screenDimensions = Dimensions.get("screen");

const initialFormState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
  });


  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ screen });
      }
    );
    return () => subscription?.remove();
  });

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const handlerSubmit = () => {
    console.log(values);
    Keyboard.dismiss();
    setValues(initialFormState);
  };


  const handlerHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

              <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "marginBottom" : "height"}
          >
            <View
              style={{
                ...styles.formWrap,
                width: Dimensions.get("window").width,
              }}
            >  
            <Text style={styles.formTitle}>Login</Text>
              <View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    value={values.email}
                    onChangeText={(value) =>
                      setValues((prevState) => ({ ...prevState, email: value }))
                    }
                    placeholder="Email"
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                    onBlur={() => {
                      setIsShowKeyboard(false);
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    value={values.password}
                    onChangeText={(value) =>
                      setValues((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    placeholder="Password"
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                    onBlur={() => {
                      setIsShowKeyboard(false);
                    }}
                    secureTextEntry={hidePassword}
                  />
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={handlerHidePassword}
                  >
                    <Image
                      style={styles.showPasswordIcon}
                      source={
                        hidePassword
                          ? require("../../assets/image/show.png")
                          : require("../../assets/image/unshow.png")
                      }
                    />
                  </TouchableOpacity>
                </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.registerBtn}
                      onPress={handlerSubmit}
                    >
                      <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <View
                  style={{
                    ...styles.textWrap,
                    marginBottom: isShowKeyboard
                      ? -110
                      : Math.floor(dimensions.screen.height / 6),
                  }}
                >
                  <Text style={styles.text}>
                    Don't have an account? Register
                  </Text>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
  },
  formWrap: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  formTitle: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
    fontFamily: "Roboto-Regular",
  },
  input: {
    width: 350,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  registerBtn: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 43,
    borderColor: "transparent",
    backgroundColor: "#FF6C00",
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  textWrap: {
     marginTop: 16,
     alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  showPassword: {
    position: "absolute",
    top: 12,
    right: 15,
  },

  showPasswordIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
