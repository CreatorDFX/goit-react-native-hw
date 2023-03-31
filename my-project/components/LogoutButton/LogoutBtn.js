import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function LogoutBtn({ navigation, style, ...props }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Register")}
      style={{ ...styles.logoutBtn, ...style }}
      {...props}
    >
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD"
        style={styles.logoutIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});
