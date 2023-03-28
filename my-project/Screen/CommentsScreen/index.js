import {
    View,
    StyleSheet,
    Text,
  } from "react-native";

export default function CommentScreen() {
  return (
    <View style={styles.container}>
        <Text>This is commentscreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },
})
