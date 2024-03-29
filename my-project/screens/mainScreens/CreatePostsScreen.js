import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
  Button,
} from "react-native";
import firebase from "../../firebase/config";
import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import KeyboardWrapper from "../../components/KeyboardWrapper";
import { selectUserId, selectUserName } from "../../redux/auth/authSelectors";

export default function CreatePostsScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const locationRef = useRef();
  const [camera, setCamera] = useState(null);

  const username = useSelector(selectUserName);
  const userId = useSelector(selectUserId);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const sendPhoto = () => {
    setPhoto(photo.uri);
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const handlerSubmit = async () => {
    try {
      await uploadPostToServer();
      navigation.navigate("Posts");
      setPhoto(null);
      setLocation(null);
      setTitle("");
    } catch (error) {
      alert(error.message);
    }
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();

    const createPost = await firebase
      .firestore()
      .collection("posts")
      .add({ photo, title, location, userId, username });
  };

  const uploadPhotoToServer = async () => {
    const res = await fetch(photo);
    const file = await res.blob();
    const uniquePostId = Date.now().toString();
    await firebase.storage().ref(`postImage/${uniquePostId}`).put(file);
    const processedPhoto = await firebase
      .storage()
      .ref("postImage")
      .child(uniquePostId)
      .getDownloadURL();
    return processedPhoto;
  };

  return (
    <View style={styles.container}>
      <KeyboardWrapper setIsShowKeyboard={setIsShowKeyboard}>
        <View style={{ overflow: "hidden", borderRadius: 8, marginTop: 36 }}>
          <Camera style={styles.camera} ref={setCamera} type={CameraType.back}>
            <TouchableOpacity onPress={takePhoto} style={styles.cameraBtn}>
              <FontAwesome
                name="camera"
                size={24}
                color="#BDBDBD"
                style={styles.uploadIcon}
              />
            </TouchableOpacity>
          </Camera>
        </View>
        {photo && (
          <View style={styles.photoPreview}>
            <Image
              style={{ width: 343, height: 240 }}
              source={{ uri: photo }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.uploadPhotoBtn} onPress={sendPhoto}>
          {photo ? (
            <Text style={styles.uploadBtnText}>Edit photo</Text>
          ) : (
            <Text style={styles.uploadBtnText}> Upload photo</Text>
          )}
        </TouchableOpacity>
        <View style={styles.formWrap}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Title..."
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            onFocus={() => setIsShowKeyboard(true)}
            onSubmitEditing={() => {
              locationRef.current.focus();
            }}
          />
          <TextInput
            ref={locationRef}
            value={location}
            onChangeText={setLocation}
            placeholder="Location..."
            style={{
              ...styles.input,
              paddingLeft: 28,
              marginTop: 18,
              marginBottom: 42,
            }}
            placeholderTextColor="#BDBDBD"
            onFocus={() => setIsShowKeyboard(true)}
            onSubmitEditing={() => {
              setIsShowKeyboard(false);
            }}
          />
          <View style={styles.locationPoint}>
            <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
          </View>
          <TouchableOpacity
            style={styles.createPostBtn}
            disabled={!photo}
            onPress={handlerSubmit}
          >
            <Text style={styles.createPostBtnText}>Add post</Text>
          </TouchableOpacity>
        </View>
      </KeyboardWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  photoPreview: {
    position: "absolute",
    top: 34,
    left: 0,
    borderColor: "#fff",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  formWrap: {
    paddingBottom: 111,
  },
  cameraBtn: {
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff77",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 343,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    lineHeight: 19,
  },
  uploadPhotoBtn: {
    height: 19,
    justifyContent: "flex-start",
    marginTop: 8,
    borderColor: "transparent",
    backgroundColor: "transparent",
    marginBottom: 32,
  },
  camera: {
    width: 343,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  locationPoint: {
    position: "absolute",
    top: 80,
    left: 0,
  },
  createPostBtn: {
    height: 51,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "transparent",
    backgroundColor: "#FF6C00",
  },
  createPostBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-Regular",
  },
});
