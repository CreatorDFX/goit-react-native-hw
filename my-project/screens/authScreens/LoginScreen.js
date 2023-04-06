import { useState, useRef, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackgroundImage from "../../components/BackgroundImg";
import KeyboardWrapper from "../../components/KeyboardWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { authStateChangeUser, loginUser } from "../../redux/auth/authOperations";

const initialFormState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handlerSubmit = () => {
    console.log(values)
    Keyboard.dismiss();
    dispatch(loginUser(values));
  };


  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  return (
    <BackgroundImage>
      <KeyboardWrapper
        setIsShowKeyboard={setIsShowKeyboard}
        style={{ justifyContent: "flex-end" }}
      >
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
                secureTextEntry={passwordVisibility}
              />
              <Pressable
                style={styles.showPassword}
                onPress={handlePasswordVisibility}
              >
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={26}
                  color="#FF6C00"
                />
              </Pressable>
            </View>
            <PrimaryButton onPress={handlerSubmit} title={"Login"} />
            <Text
              onPress={() => navigation.navigate("Register")}
              style={styles.text}
            >
              Don't have an account? Register
            </Text>
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
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
    fontFamily: "Roboto-Medium",
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
  showPassword: {
    position: "absolute",
    top: 13,
    right: 15,
  },
});

export default LoginScreen;
