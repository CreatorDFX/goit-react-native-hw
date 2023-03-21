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
} from "react-native";

import image from "../../assets/image/bgImg.jpg";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Login"
                style={styles.input}
              />
              <View style={{ marginBottom: 16, marginTop: 16 }}>
                <TextInput
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Email"
                  style={styles.input}
                />
              </View>

              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />

              <TouchableOpacity style={styles.styleRegisterBtn}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Already have an account? Login</Text>
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
    width: 400,
    height: 812,
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
  },
  form: {
    marginHorizontal: 16,
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
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});

export default RegistrationScreen;
