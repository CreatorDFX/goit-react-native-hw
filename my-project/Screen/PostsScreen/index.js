import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList, 
  Image
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react"; 
import { EvilIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';


export default function PostsScreen({navigation, route, }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
   <>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Posts</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.logoutBtn}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
        </View> 
        <View style={styles.mainContainer}>
        <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32, }}
         >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 343, height: 240 }}
            />
              <Text
              style={styles.postsNameDescription}
            >
           Forest
            </Text>
            <View style={styles.wrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("comments")
                }
              >
                <EvilIcons name="comment" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "baseline" }}
                onPress={() =>
                  navigation.navigate("map")
                }
              >
                 <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
                <Text style={styles.locationText}>
                 Volyn region, Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center',
  },

  postContainer: {
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: 88,
    padding: 11,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  postTitle: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: " #212121",
  },
  logoutBtn: {
    padding: 10,
    position: "absolute",
    right: 0,
    top: 42,
  },
  postsNameDescription: {
      fontFamily: "Roboto-Regular",
      fontSize: 18,
      marginBottom: 5,
      marginTop: 5,
      color: 'black',
     
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  locationText: {
    textDecorationLine: "underline",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});
