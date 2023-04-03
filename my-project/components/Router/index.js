import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../../screens/authScreens/RegistrationScreen";
import LoginScreen from "../../screens/authScreens/LoginScreen";
import Home from "../../screens/mainScreens/Home";
import CommentsScreen from "../../screens/mainScreens/CommentsScreen";
import GoToBackBtn from "../GoToBackButton/GoToBackBtn";
import MapScreen from "../../screens/mainScreens/MapScreen";

const MainStack = createStackNavigator();

export default function Router() {
  
  return (
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerStyle: {
              borderWidth: 1,
              borderColor: "#BDBDBD",
            },
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 17,
              color: "#212121",
            },
            headerTitleAlign: "center",
          }}
        >
          <MainStack.Screen   name="Register" component={RegistrationScreen} options={{headerShown: false}} />
          <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}  />
          <MainStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={({ navigation }) => ({
              headerTitle: "Comments",
              headerBackVisible: false,
              headerLeft: (props) => (
                <GoToBackBtn navigation={navigation} {...props} />
              ),
            })}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={({ navigation }) => ({
              headerTitle: "Map",
              headerBackVisible: false,
              headerLeft: (props) => (
                <GoToBackBtn navigation={navigation} {...props} />
              ),
            })}
          />
        </MainStack.Navigator>
      </NavigationContainer>
  );
}
