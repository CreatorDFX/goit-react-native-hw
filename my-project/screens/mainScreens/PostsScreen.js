import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import firebase from '../../firebase/config'
import { useSelector } from "react-redux";
import { selectProfileImg, selectUser, selectUserId, selectUserName } from "../../redux/auth/authSelectors";

export default function DefaultPostScreen({ navigation}) {
  const [posts, setPosts] = useState([]);
  const userId = useSelector(selectUserId);
  const profileImg = useSelector(selectProfileImg);
  const userName = useSelector(selectUserName);
  
  const user = useSelector(selectUser)
 
  console.log(posts)
  const getAllPost = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <View style={styles.mainContainer}>
       <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />
          </View>
          <View>
        <View>
          <Text style={styles.login}>{userName || 'Anonymous'}</Text>
        </View>
        <View>
          <Text style={styles.email}>{user.email || 'Anonymous@anon.com'}</Text>
        </View>
      </View>
          </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({item} ) => (
          <View style={{ marginBottom: 32 }}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 343, height: 240, borderRadius: 8, overflow: 'hidden' }}
            />
            <Text style={styles.postsNameDescription}>{item.title}</Text>
            <View style={styles.wrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments", { postId: item.id })}>
                <EvilIcons name="comment" size={30} color="black"  style={{ transform: [{ scaleX: -1 }] }}/>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "baseline" }}
                onPress={() => navigation.navigate("Map", {location: item.location})}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={24}
                  color="#BDBDBD"
                />
                 <Text style={styles.locationText}>
                  {item.location}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 32,
    paddingHorizontal: 23,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  profileImg: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
  },
  login: { fontFamily: 'Roboto-Medium', fontSize: 13, color: '#212121' },
  email: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  postsNameDescription: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
    color: "black",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  locationText: {
    textDecorationLine: "underline",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});
