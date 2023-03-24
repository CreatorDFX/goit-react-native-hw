import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function PrimaryButton({title, onPress}) {
  return (
    <TouchableOpacity
    style={styles.formBtn}
    onPress={onPress}
  >
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    formBtn: {
        height: 51,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 43,
        borderColor: "transparent",
        backgroundColor: "#FF6C00",
      },
      btnText: {
        textAlign: "center",
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "Roboto-Regular",
      },
  });
