import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function GoToBackBtn({ navigation, style, ...props }) {
  return (
    <TouchableOpacity
      style={styles.arrowLeftBtn}
      onPress={() => navigation.navigate("Posts")}
      {...props}
    >
      <AntDesign name="arrowleft" size={24} color="#E8E8E8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrowLeftBtn: {
    position: "absolute",
    top: 17,
    left: 15,
  },
});
