import {
    View,
    StyleSheet,
    Text,
  } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.container}>
        <Text>This is mapscreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },
})
