import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PostsScreen from '../PostsScreen';
import ProfileScreen from '../ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen';
import LogoutButton from '../../components/LogoutButton';

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutButton style={{ marginRight: 10 }} />,
          tabBarIcon: () => (
            <SimpleLineIcons
              name="grid"
              size={24}
              color={'rgba(33, 33, 33, 0.8)'}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CreatePost');
          },
        })}
        options={{
          tabBarIcon: () => (
            <View style={styles.createPostButton}>
              <Fontisto name="plus-a" size={13} color={'#FFFFFF'} />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="user" size={24} color={'rgba(33, 33, 33, 0.8)'} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  createPostButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
});