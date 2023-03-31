import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function PostsScreen({ navigation, route, location }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 343, height: 240 }}
            />
            <Text style={styles.postsNameDescription}>Forest</Text>
            <View style={styles.wrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("comments")}>
                <EvilIcons name="comment" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "baseline" }}
                onPress={() => navigation.navigate("map")}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.locationText}>{location}</Text>
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
