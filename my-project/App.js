import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screen/RegistrationScreen/RegistrationScreen";
import LoginScreen from './Screen/LoginScreen/LoginScreen'
import Home from "./Screen/Home/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import PostsScreen from "./Screen/PostsScreen";
import CreatePostsScreen from "./Screen/CreatePostsScreen";
import ProfileScreen from "./Screen/ProfileScreen";

SplashScreen.preventAutoHideAsync();
const AuthStack = createStackNavigator();

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
  <NavigationContainer>
    <AuthStack.Navigator>
        <AuthStack.Screen  options={{
            headerShown: false,
          }} name="Register" component={RegistrationScreen}/>
        < AuthStack.Screen  options={{
            headerShown: false,
          }} name="Login" component={LoginScreen} />
           <AuthStack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
      </AuthStack.Navigator> 
    </NavigationContainer> 
    </View>
  );
}
