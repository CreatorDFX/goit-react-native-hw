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
  Image,
  Button,

} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';


const initialPostState = {
  photo: null,
  name: "",
  location: "",
};


export default function CreatePostsScreen({navigation}) {
  const [photo, setPhoto] = useState(null)
  const [name, setName] = useState('');
  const [location, setLocation] = useState('')
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const locationRef = useRef();
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };
  
  const [permission, requestPermission] = Camera.useCameraPermissions();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handlerSubmit = () => {
    console.log(name, location, photo);
    Keyboard.dismiss();
    setLocation('');
    setName('');
    setPhoto('');
    sendPhoto();
  };

  const sendPhoto = () => {
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Create post</Text>
        <TouchableOpacity style={styles.arrowLeftBtn} onPress={() => navigation.navigate("Posts")}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
      }}>
          <KeyboardAvoidingView
             style={{ flex: 1 }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
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
        {photo && (
          <View style={styles.photo_preview}>
            <Image
              style={{ width: 200, height: 150 }}
              source={{ uri: photo }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.uploadPhotoBtn} onPress={sendPhoto}>
          <Text style={styles.uploadBtnText}>Upload photo</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            value={name}
            onChangeText={(value) =>
              setName((prevState) => ({ ...prevState, name: value }))
            }
            placeholder="Name..."
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
              onChangeText={(value) =>
                setLocation((prevState) => ({ ...prevState, location: value }))
              }
              placeholder="Location..."
              style={{...styles.input, paddingLeft: 28, marginTop: 16, marginBottom: 50, }}
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onSubmitEditing={() => {
                setIsShowKeyboard(false);
              }}
            />
            <View style={styles.locationPoint}>
            <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
          </View>
        
        <TouchableOpacity style={styles.createPostBtn} onPress={handlerSubmit}>
          <Text style={styles.createPostBtnText}>Add post</Text>
        </TouchableOpacity>
        </View> 
       
        <TouchableOpacity style={styles.removePostBtn}>
        <AntDesign name="delete" size={24} color="#BDBDBD"/>
        </TouchableOpacity>  
        </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
      </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContainer: {
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: 88,
    padding: 11,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  photo_preview: {
    position: "absolute",
    top: 75,
    left: 70,
    borderColor: "#fff",
    borderWidth: 1, 
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
  cameraBtn: {
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff77",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  postFormWrap: {
    marginTop: 32,
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
    color: '#212121',
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
    marginTop: 32,
    width: 343,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',

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
    top: 76,
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
    marginBottom: 111,
  },
  createPostBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
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
    left: "35%",
  },
});
