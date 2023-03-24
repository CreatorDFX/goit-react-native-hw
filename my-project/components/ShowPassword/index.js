import { Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ShowPassword({ hidePassword, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.showPassword} onPress={onPress}>
        <Image
          style={styles.showPasswordIcon}
          source={
            !hidePassword
              ? require("../../assets/image/show.png")
              : require("../../assets/image/unshow.png")
          }
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  showPassword: {
    position: "absolute",
    top: 12,
    right: 15,
  },
  showPasswordIcon: {
    width: 30,
    height: 30,
  },
});
