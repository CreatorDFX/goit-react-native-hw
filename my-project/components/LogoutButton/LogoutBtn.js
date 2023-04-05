import { StyleSheet, TouchableOpacity,  Alert, } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";

export default function LogoutBtn({ navigation, style, ...props }) {
  
  const dispatch = useDispatch();
  const logoutPromptUser = () => {
    const title = "Are you sure you want to sign out?";
    const message = "";
    const buttons = [
      { text: "Cancel", type: "cancel" },
      {
        text: "Log out",
        onPress: () => {
          dispatch(logoutUser());

          Alert.alert("You are logged out");
        },
      },
    ];
    Alert.alert(title, message, buttons);
  
  }
 
  return (
    <TouchableOpacity
      onPress={logoutPromptUser}
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
