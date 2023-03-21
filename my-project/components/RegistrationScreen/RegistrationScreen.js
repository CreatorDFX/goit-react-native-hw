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
  const [isShowKeyboard, setIsShowKeyboard] = useState(true);

  const handlerSubmit = () => {
    console.log(values);
    setValues(initialFormState);
    keyboardHide();
  };


  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.mainContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <KeyboardAvoidingView
          style = {styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formWrap,
                width: Dimensions.get("window").width,
                paddingBottom: !isShowKeyboard ? 40 : 0,
              }}
            >
              <Text style={styles.title}>Registration</Text>
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
                  onFocus={() => setIsShowKeyboard(false)}
                />
                <View style={{ marginBottom: 16, marginTop: 16 }}>
                  <TextInput
                    value={values.email}
                    onChangeText={(value) =>
                      setValues((prevState) => ({ ...prevState, email: value }))
                    }
                    placeholder="Email"
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(false)}
                  />
                </View>

                <TextInput
                  value={values.password}
                  onChangeText={(value) =>
                    setValues((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(false)}
                />
                {isShowKeyboard ? (
                  <>
                    <TouchableOpacity
                      style={styles.registerBtn}
                      onPress={handlerSubmit}
                    >
                      <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                      Already have an account? Login
                    </Text>
                  </>
                ) : null}
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
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
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
    left: 138,
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
  title: {
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
});

export default RegistrationScreen;
