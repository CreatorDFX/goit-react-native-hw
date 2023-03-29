import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,

} from "react-native";
import { useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

const initialPostState = {
  photo: "",
  name: "",
  location: "",
};
export default function CreatePostsScreen({navigation}) {
  const [values, setValues] = useState(initialPostState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const locationRef = useRef();

  const handlerSubmit = () => {
    console.log(values);
    Keyboard.dismiss();
    setValues(initialPostState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      setIsShowKeyboard(false);
    }}>
        <KeyboardAvoidingView
          style={styles.mainContainer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Create post</Text>
        <TouchableOpacity style={styles.arrowLeftBtn} onPress={() => navigation.navigate("Posts")}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.uploadWrap}>
        <View style={styles.uploadPhoto}>
          <View style={styles.uploadIconWrap}>
            <FontAwesome
              name="camera"
              size={24}
              color="#BDBDBD"
              style={styles.uploadIcon}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.uploadBtn}>
          <Text style={styles.uploadBtnText}>Upload photo</Text>
        </TouchableOpacity>

        <View style={styles.postFormWrap}>
          <TextInput
            value={values.name}
            onChangeText={(value) =>
              setValues((prevState) => ({ ...prevState, name: value }))
            }
            placeholder="Name..."
            style={styles.input}
            returnKeyType="next"
            onFocus={() => setIsShowKeyboard(true)}
            onSubmitEditing={() => {
              locationRef.current.focus();
            }}
          />
          <View style={{ marginTop: 16 }}>
            <TextInput
              ref={locationRef}
              value={values.location}
              onChangeText={(value) =>
                setValues((prevState) => ({ ...prevState, location: value }))
              }
              placeholder="Location..."
              style={{...styles.input, paddingLeft: 28}}
            />
            <View style={styles.locationPoint}>
            <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.createPostBtn} onPress={handlerSubmit}>
          <Text style={styles.createPostBtnText}>Add post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removePostBtn}>
        <AntDesign name="delete" size={24} color="#BDBDBD"/>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  uploadWrap: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postContainer: {
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: 88,
    padding: 11,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  postTitle: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: " #212121",
  },
  arrowLeftBtn: {
    padding: 10,
    position: "absolute",
    left: 0,
    top: 42,
  },
  postFormWrap: {
    flex: 1,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  input: {
    width: 343,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: 19,
  },
  uploadBtn: {
    height: 19,
    marginBottom: 32,
    justifyContent: "flex-start",
    marginTop: 8,
    borderColor: "transparent",
    backgroundColor: "white",
  },
  uploadPhoto: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },
  uploadIconWrap: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    position: 'absolute',
    top: 90,
    left: 150,
  },
  uploadBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  locationPoint: {
    position: "absolute",
    top: 12,
    left: 0,
  },
  createPostBtn: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    marginTop: 150,
    marginBottom: 120,
  },
  createPostBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  removePostBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 'auto',
    borderRadius: 20,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    position: 'absolute',
    bottom: 0,
    left: "45%",
  },
});
