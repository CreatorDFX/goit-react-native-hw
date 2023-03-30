import {
    StyleSheet,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard

  } from "react-native";
  

 export default function KeyboardWrapper ({setIsShowKeyboard, children}) {
  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
      }}>
          <KeyboardAvoidingView
           style={styles.formContainer}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >{children}</KeyboardAvoidingView>
          </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
});



