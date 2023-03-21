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

  const handlerSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(values);
    setValues(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={handlerSubmit}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.formWrap}>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.avatar}>
              <Image
                source={require("../../assets/image/addBtn.png")}
                style={styles.addBtn}
              />
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 80 : 0,
              }}

            >
              <TextInput
                value={values.login}
                onChangeText={(value) =>
                  setValues((prevState) => ({ ...prevState, login: value }))
                }
                placeholder="Login"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
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
                />
              </View>

              <TextInput
                value={values.password}
                onChangeText={(value) =>
                  setValues((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              {!isShowKeyboard ? (
                <>
              <TouchableOpacity style={styles.styleRegisterBtn}  onPress={handlerSubmit}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Already have an account? Login</Text> 
              </>
              ): (null)}
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: "flex-end",
  },
  formWrap: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 400,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    left: 138,
    top: -60,
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
    marginTop: 32,
    marginBottom: 33,
    fontFamily: 'Roboto-Regular',
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
  styleRegisterBtn: {
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
    fontFamily: 'Roboto-Regular',
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: 'Roboto-Regular',
  },
});

export default RegistrationScreen;
