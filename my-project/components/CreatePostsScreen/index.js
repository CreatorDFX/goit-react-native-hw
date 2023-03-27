import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";
const initialPostState = {
  name: "",
  location: "",
};
export default function CreatePostsScreen () {
  const [values, setValues] = useState(initialPostState);

  return (
    <>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Create publication</Text>
      <TouchableOpacity  style={styles.logoutBtn}>
      <Image
          style={styles.logoutIcon}
          source={require('../../assets/image/arrow-left.png')}
        />
      </TouchableOpacity>
    </View>
    <View style = {styles.postFormWrap}>
     <TextInput
                value={values.name}
                onChangeText={(value) =>
                  setValues((prevState) => ({ ...prevState, name: value }))
                }
                placeholder="Name"
                style={styles.input}
                returnKeyType="next"
              />
               <TextInput
                value={values.location}
                onChangeText={(value) =>
                  setValues((prevState) => ({ ...prevState, location: value }))
                }
                placeholder="Location"
                style={styles.input}
                returnKeyType="next"
              />
     </View>
     </>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    backgroundColor: 'white', 
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
    alignItems: "center",

  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    
  },
});
