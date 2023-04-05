import { useState, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import firebase from "../../firebase/config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 
import BackgroundImage from "../../components/BackgroundImg";
import KeyboardWrapper from "../../components/KeyboardWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { AntDesign } from '@expo/vector-icons'; 

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({navigation}) => {
  const [values, setValues] = useState(initialFormState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [image, setImage] = useState(null);
  const [rightIcon, setRightIcon] = useState("eye");
  const passwordRef = useRef();
  const emailRef = useRef();

  const dispatch = useDispatch();

  const handlerSubmit = () => {
    if(values.email === '' || values.name === ''|| values.password === '') {
      Alert.alert('All fields are required')
    }
    Keyboard.dismiss();
    dispatch(registerUser({ ...values, image }));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadProfileImage(result.assets[0].uri);
    }
  };

  const uploadProfileImage = async (img) => {
    const response = await fetch(img);
    const file = await response.blob();
    const uniquePostId = Date.now().toString();
    await firebase.storage().ref(`profileImg/${uniquePostId}`).put(file);
    const processedPhoto = await firebase
      .storage()
      .ref("profileImg")
      .child(uniquePostId)
      .getDownloadURL();
    setImage(processedPhoto);
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

  const deletePhoto = () => {
    setImage(null)
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
            marginBottom: isShowKeyboard ? -150 : 0,
          }}
        >
          <Text style={styles.formTitle}>Registration</Text>
          <View style={styles.avatarWrap}> 
          {!image ? (
            <TouchableOpacity style={styles.avatar} onPress={pickImage}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={styles.addBtn}
              />
              </TouchableOpacity>
              ) : (
                <TouchableOpacity style={{zIndex: 1}} onPress={deletePhoto}>
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color="#BDBDBD"
                  style={{...styles.addBtn, backgroundColor: 'white', borderRadius: 50}}
                />
                </TouchableOpacity>
              )}
            
            {image && (
              <Image style={styles.profileAvatar} source={{ uri: image }} />
            )}
          </View>
          <View>
            <TextInput
              value={values.name}
              onChangeText={(value) =>
                setValues((prevState) => ({ ...prevState, name: value }))
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
                secureTextEntry={passwordVisibility}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
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
            <PrimaryButton onPress={handlerSubmit} title={"Register"} />
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.text}
            >
              Already have an account? Login
            </Text>
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
    left: 142,
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
    left: 108,
    top: 84,
  },
  profileAvatar: {
    position: "absolute",
    width: 120,
    height: 120,
    top: 0,
    left: 0,
    borderRadius: 16,
  },
  formTitle: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
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
    marginTop: 16,
    marginBottom: 45,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
  showPassword: {
    position: "absolute",
    top: 13,
    right: 15,
  },
});

export default RegistrationScreen;
