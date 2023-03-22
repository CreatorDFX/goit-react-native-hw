import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import image from "../../assets/image/bgImg.jpg";

const initialFormState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

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
      <View style={styles.mainContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
          <KeyboardAvoidingView
          style = {styles.formContainer}
            behavior={Platform.OS == "ios" ? "marginBottom" : "height"}
          >
            <View
              style={{
                ...styles.formWrap,
                width: Dimensions.get("window").width,
                marginBottom: isShowKeyboard ? -150 : 0,
              }}
            >
              <Text style={styles.formTitle}>Registration</Text>
              <View style={styles.avatarWrap}>
                <View style={styles.avatar}>
                  <Image
                    source={require("../../assets/image/addBtn.png")}
                    style={styles.addBtn}
                  />
                </View>
              </View>
              <View>
                <TextInput
                  value={values.login}
                  onChangeText={(value) =>
                    setValues((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Login"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                  }}
                />
                <View style={{ marginBottom: 16, marginTop: 16 }}>
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
                  secureTextEntry={hidePassword}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                  }}
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
                      style={styles.registerBtn}
                      onPress={handlerSubmit}
                    >
                      <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                      Already have an account? Login
                    </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
  },
  formWrap: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  avatarWrap: {
    position: "absolute",
    left: 148,
    top: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16, 
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 106,
    top: 84,
  },
  formTitle: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
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
  text: {
    marginTop: 16,
    marginBottom: 45,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
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

export default RegistrationScreen;
