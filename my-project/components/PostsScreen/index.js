import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

export default function PostScreen() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Publication</Text>
      <TouchableOpacity  style={styles.logoutBtn}>
      <Image
          style={styles.logoutIcon}
          source={require('../../assets/image/logout.png')}
        />
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
  logoutIcon: {
    width: 24,
    height: 24,
  }
});
