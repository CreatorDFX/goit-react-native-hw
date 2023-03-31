import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import LogoutBtn from "../../components/LogoutButton/LogoutBtn";
import GoToBackBtn from "../../components/GoToBackButton/GoToBackBtn";

const MainTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarStyle: { height: 83, paddingHorizontal: 82, paddingBottom: 22 },
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
      }
      }
    >
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Posts",
          headerRight: (props) => (
            <LogoutBtn navigation={navigation} {...props} />
          ),
          tabBarIcon: () => (
            <SimpleLineIcons name="grid" size={28} color="#bdbdbd" />
          ),
          tabBarShowLabel: false,
        })}
      />
      <MainTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: {
            display: "none",
          },
          headerTitle: "Create posts",
          headerLeft: (props) => (
            <GoToBackBtn navigation={navigation} {...props} />
          ),
          tabBarIcon: () => (
            <View style={styles.createPostButton}>
              <Feather name="plus" size={18} color="white" />
            </View>
          ),
          tabBarShowLabel: false,
        })}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Create");
          },
          navigationOptions: () => {
            return {
              tabBarVisible: false,
            };
          },
        })}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          tabBarIcon: () => (
            <Feather name="user" size={28} color="#bdbdbd" />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  createPostButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default Home;
