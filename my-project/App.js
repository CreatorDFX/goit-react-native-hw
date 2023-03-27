import { View } from "react-native";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen";
import LoginScreen from './components/LoginScreen/LoginScreen'
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import PostScreen from "./components/PostsScreen";
import CreatePostsScreen from "./components/CreatePostsScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <PostScreen/> */}
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen/> */}
    <CreatePostsScreen/>
    </View>
  );
}
