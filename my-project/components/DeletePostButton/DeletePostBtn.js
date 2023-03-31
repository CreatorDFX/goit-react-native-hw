import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function DeletePostBtn() {
  return (
    <TouchableOpacity style={styles.removePostBtn}>
      <AntDesign name="delete" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  removePostBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    borderRadius: 20,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
  },
});
