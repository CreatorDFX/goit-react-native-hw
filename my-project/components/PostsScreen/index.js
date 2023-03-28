import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 

export default function PostScreen() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Posts</Text>
      <TouchableOpacity  style={styles.logoutBtn}>
      <Feather name="log-out" size={24} color="#BDBDBD" style={styles.logoutIcon}/>  
      </TouchableOpacity>
    </View>
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
    right: 0,
    top: 42,
  },
});
