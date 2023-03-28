import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const MainTabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="grid" size={24} color="#bdbdbd" />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTabs.Screen
        options={{
          tabBarIcon: () => (
            <View style={styles.createPostButton}>
              <Feather name="plus" size={14} color="white" />
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Create"
        component={CreatePostsScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Create");
          },
        })}
      />
      <MainTabs.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#bdbdbd" />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
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