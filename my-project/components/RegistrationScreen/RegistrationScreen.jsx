import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
  Text,
  View,
  Image
} from "react-native";

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
    <Text style={styles.title} >Registration</Text>
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
  >
    <TextInput
      value={name}
      onChangeText={nameHandler}
      placeholder="Login"
      style={styles.input}
    />
      <TextInput
      value={email}
      onChangeText={nameHandler}
      placeholder="Email"
      style={styles.input}
    />
    <TextInput
      value={password}
      onChangeText={passwordHandler}
      placeholder="Password"
      secureTextEntry={true}
      style={styles.input}
    />
    <View style={styles.styleRegisterBtn}>
    <Button title={"Registration"} color='#FF6C00'/>
    </View>
    <Text style={styles.text}>Already have an account? Login</Text>
    {/* <Image source={require('../../assets/image/homeIndicator.svg')}/> */}
  </KeyboardAvoidingView>
  </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        width: 400,
        height: 549,
      },
      title: {
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        marginBottom: 33,

      },
    input: {
      width: 350,
      height: 50,
      padding: 16,
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
      backgroundColor: '#F6F6F6',
      marginBottom: 16,
    },
    styleRegisterBtn: {
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
    borderColor: "transparent", 
    overflow: "hidden",
    },
    text: {
    fontSize: 16,
    color: '#1B4371',
    textAlign: 'center',
    },

  });
export default RegistrationScreen;