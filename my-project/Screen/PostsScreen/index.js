import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons'; 

export default function PostsScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Posts</Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.navigateContainer} >
          <TouchableOpacity>
          <Octicons name="apps" size={24} color="#212121" />
          </TouchableOpacity>
         
            <TouchableOpacity style={styles.createPostBtn} >
            <Feather name="plus" size={14} color="white" />
            </TouchableOpacity>
    

          <TouchableOpacity>
          <Feather name="user" size={24} color="#212121" />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  logoutBtn: {
    padding: 10,
    position: "absolute",
    right: 0,
    top: 42,
  },
  navigateContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: 88,
    padding: 11,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  createPostBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginHorizontal: 31,
    borderColor: "transparent",
    backgroundColor: "#FF6C00",
  },
});
