import { useState, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Dimensions,
} from "react-native";

import BackgroundImage from "../BackgroundImg";
import KeyboardWrapper from "../KeyboardWrapper";
import ShowPassword from "../ShowPassword";
import PrimaryButton from "../PrimaryButton";

const initialFormState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const passwordRef = useRef();

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
    <BackgroundImage>
      <KeyboardWrapper setIsShowKeyboard={setIsShowKeyboard}>
        <View
          style={{
            ...styles.formWrap,
            width: Dimensions.get("window").width,
            marginBottom: isShowKeyboard ? -210 : 0,
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
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
                secureTextEntry={hidePassword}
              />
              <ShowPassword onPress={handlerHidePassword} />
            </View>
            <PrimaryButton onPress={handlerSubmit} title={"Login"} />
            <Text style={styles.text}>Don't have an account? Register</Text>
          </View>
        </View>
      </KeyboardWrapper>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
  text: {
    textAlign: "center",
    marginTop: 16,
    marginBottom: 111,
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});

export default LoginScreen;
