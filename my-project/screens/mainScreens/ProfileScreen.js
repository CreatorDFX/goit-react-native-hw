import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BackgroundImage from "../../components/BackgroundImg";
import {
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons
} from "@expo/vector-icons";
import LogoutBtn from "../../components/LogoutButton/LogoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import firebase from "../../firebase/config";
import {
  selectProfileImg,
  selectUserId,
  selectUserName,
} from "../../redux/auth/authSelectors";
import { logoutUser } from "../../redux/auth/authOperations";

const ProfileScreen = ({ navigation, comment}) => {
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
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };
  const [isLiked, setIsLiked] = useState(false);

  const [likes, setLikes] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <BackgroundImage />
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />
            <TouchableOpacity style={{ zIndex: 1 }}>
              <AntDesign
                name="closecircleo"
                size={24}
                color="#BDBDBD"
                style={{
                  ...styles.addBtn,
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.userName}>{username}</Text>
        <LogoutBtn />
        <View style={styles.postsWrapper}>
          <FlatList
            data={userPosts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 32}}>
                <Image source={{ uri: item.photo }} style={styles.postImage} />
                <Text style={styles.postsNameDescription}></Text>
                <View style={styles.postIconsWrap}>
                <View style={styles.wrapper}>
                  <TouchableOpacity
                   style={{...styles.navigationButton, marginRight: 30,}}
                    onPress={() =>
                      navigation.navigate("Comments", { postId: item.id })
                    }
                  >
                {comment === 0 ? (
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color="#BDBDBD"
                style={{ transform: [{ scaleX: -1 }] }}
              />
            ) : (
              <Ionicons
                name="chatbubble-sharp"
                size={24}
                color="#FF6C00"
                style={{ transform: [{ scaleX: -1 }] }}
              />
            )} 
            <Text style={styles.navigationTitle}>{comment}</Text>
                  </TouchableOpacity>
                  {likes >= 0 ? (
                  <TouchableOpacity
                  style={styles.navigationButton}
                  onPress={() => setIsLiked(!isLiked)}
                >
                    <Feather name="thumbs-up" size={24} color={isLiked ? '#FF6C00' : '#BDBDBD'} />
                    <Text style={styles.navigationTitle}>
                {isLiked ? likes + 1 : likes}
              </Text>
            </TouchableOpacity>
          ) : null}
           </View>
                  <TouchableOpacity
                     style={styles.navigationButton}
                    onPress={() =>
                      navigation.navigate("Map", { location: item.location })
                    }
                  >
                    <SimpleLineIcons
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text style={styles.locationText}>ggggg</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postsWrapper: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
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
    fontFamily: "Roboto-Medium",
  },
  postImage: {
    width: 343,
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  profileImg: {
    position: "absolute",
    width: 120,
    height: 120,
    top: 0,
    left: 0,
    borderRadius: 16,
  },
  postIconsWrap: {
    flexDirection: 'row', 
    justifyContent: 'space-between' 

  },
  wrapper: {
    flexDirection: 'row',
     gap: 24,
  },
  navigationTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    marginLeft: 6,
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
});

export default ProfileScreen;
