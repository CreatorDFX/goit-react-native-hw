
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList
} from "react-native";
import BackgroundImage from "../../components/BackgroundImg";
import { AntDesign } from '@expo/vector-icons'; 
import LogoutBtn from "../../components/LogoutButton/LogoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";
import firebase from "../../firebase/config";
import  { selectProfileImg, selectUserId, selectUserName } from '../../redux/auth/authSelectors'
import { logoutUser } from "../../redux/auth/authOperations";


const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userId = useSelector(selectUserId);
  const profileImg = useSelector(selectProfileImg);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    await firebase
      .firestore()
      .collection("Posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };
  const signOut = () => {
    dispatch(logoutUser());
  };
  
  return (
    <View style={{ flex: 1 }}>
    <BackgroundImage/>
        <View style={styles.container}> 
        <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />
            <AntDesign name="closecircleo" size={24} color="#BDBDBD" style={styles.addBtn} />
            </View>
          </View>
           <Text style={styles.userName}> {username}</Text>
         <LogoutBtn navigation={navigation}/>
         <FlatList
            data={userPosts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 25 }}>
                <Image
                  style={{ width: "100%", height: 300 }}
                  source={{ uri: item.photo }}
                />
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 18,
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 92,
    height: "80%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrap: {
    position: "absolute",
    left: 142,
    top: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    left: 108,
    top: 74,
  },
  userName: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginVertical: 32,
    fontFamily: "Roboto-Medium",
  },
});

export default ProfileScreen;