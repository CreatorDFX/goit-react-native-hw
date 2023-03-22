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
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

import image from "../../assets/image/bgImg.jpg";

const initialFormState = {
  email: "",
  password: "",
 
};

const RegistrationScreen = () => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);

  const handlerSubmit = () => {
    console.log(values);
    setValues(initialFormState);
    keyboardHide();
  };


  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const handlerHidePassword = () => {
   setHidePassword(!hidePassword)
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
              <Text style={styles.formTitle}>Login</Text>
              <View>
                <View style={{ marginBottom: 16}}>
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
                  onFocus={() => setIsShowKeyboard(false)}
                  secureTextEntry={hidePassword}
                /> 
                <TouchableOpacity 
                  style={styles.showPassword}
                  onPress={handlerHidePassword}
                >
                 <Image style={styles.showPasswordIcon} source={hidePassword ? require("../../assets/image/show.png") : require("../../assets/image/unshow.png")}/>
                </TouchableOpacity>
                </View>
                {isShowKeyboard ? (
                  <>
                    <TouchableOpacity
                     activeOpacity={0.8}
                      style={styles.registerBtn}
                      onPress={handlerSubmit}
                    >
                      <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                    Don't have an account? Register
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
  text: {
    marginTop: 16,
    marginBottom: 111,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    
  },
  showPassword: {
    position: 'absolute',
    top: 12,
    right: 15,
  },

  showPasswordIcon: {
    width: 30,
    height: 30,
  },
});

export default RegistrationScreen;
