import { useState, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

import BackgroundImage from "../BackgroundImg";
import KeyboardWrapper from "../KeyboardWrapper";
import PrimaryButton from "../PrimaryButton";
import ShowPassword from "../ShowPassword";

const initialFormState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const passwordRef = useRef();
  const emailRef = useRef();

  const handlerSubmit = () => {
    console.log(values);
    Keyboard.dismiss();
    setValues(initialFormState);
  };

  const handlerHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <BackgroundImage>
      <KeyboardWrapper setIsShowKeyboard={setIsShowKeyboard}>
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
              blurOnSubmit={false}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
              returnKeyType="next"
            />
            <View style={{ marginBottom: 16, marginTop: 16 }}>
              <TextInput
                ref={emailRef}
                value={values.email}
                onChangeText={(value) =>
                  setValues((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Email"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
                returnKeyType="next"
              />
            </View>
            <View>
              <TextInput
                ref={passwordRef}
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
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <ShowPassword onPress={handlerHidePassword} />
            </View>
            <PrimaryButton onPress={handlerSubmit} title={"Register"} />
            <Text style={styles.text}>Already have an account? Login</Text>
          </View>
        </View>
      </KeyboardWrapper>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  formWrap: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  avatarWrap: {
    position: "absolute",
    left: 143,
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
