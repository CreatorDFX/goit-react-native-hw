import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../../Screen/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../../Screen/LoginScreen/LoginScreen";
import Home from "../../Screen/Home/Home";
import CommentsScreen from "../../Screen/CommentsScreen/CommentsScreen";
import GoToBackBtn from "../GoToBackButton/GoToBackBtn";
import MapScreen from "../../Screen/MapScreen/MapScreen";

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
