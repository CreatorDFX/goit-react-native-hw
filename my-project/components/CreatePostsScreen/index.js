import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useState, useRef } from "react";

const initialPostState = {
  name: "",
  location: "",
};
export default function CreatePostsScreen() {
  const [values, setValues] = useState(initialPostState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const locationRef = useRef();

  return (
    <>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Create publication</Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <Image
            style={styles.logoutIcon}
            source={require("../../assets/image/arrow-left.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.uploadWrap}>
        <View style={styles.uploadPhoto}>
          <Image
            style={styles.uploadIcon}
            source={require("../../assets/image/uploadIcon.png")}
          />
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
            placeholder="Name"
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
              placeholder="Location"
              style={styles.input}
            />
            <View style={styles.locationPoint}>
              <Image
                style={styles.locationIcon}
                source={require("../../assets/image/map-pin.png")}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.uploadFormBtn}>
          <Text style={styles.uploadFormBtnText}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeBtn}>
          <Image
            source={require("../../assets/image/trash-2.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  uploadWrap: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postContainer: {
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    backgroundColor: "white",
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
  logoutBtn: {
    padding: 10,
    position: "absolute",
    left: 0,
    top: 42,
  },
  logoutIcon: {
    width: 24,
    height: 24,
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
  locationIcon: {
    marginRight: 10,
  },
  uploadFormBtn: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    marginTop: 160,
  },
  uploadFormBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  removeBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    marginTop: 107,
  },
});
