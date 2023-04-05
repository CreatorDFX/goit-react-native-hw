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

export default function DefaultPostScreen({ navigation}) {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    await firebase
      .firestore()
      .collection("Posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    console.log("Posts", posts);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={( item ) => (
          <View style={{ marginBottom: 32 }}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 343, height: 240, borderRadius: 8, overflow: 'hidden' }}
            />
            <Text style={styles.postsNameDescription}>{item.name}</Text>
            <View style={styles.wrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments", { postId: item.id })}>
                <EvilIcons name="comment" size={30} color="black" />
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
    paddingTop: 32,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
