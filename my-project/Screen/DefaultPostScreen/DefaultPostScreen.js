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
  
  export default function DefaultPostScreen({ navigation, route}) {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      if (route.params) {
        setPosts((prevState) => [...prevState, route.params]);
      }
    }, [route.params]);
   
  
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
                <TouchableOpacity onPress={() => navigation.navigate("comments", { postId: item.id })}>
                  <EvilIcons name="comment" size={30} color="black" />
                </TouchableOpacity>
  
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "baseline" }}
                  onPress={() => navigation.navigate("map",  { location: item.location })}
                >
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                   <Text style={styles.locationText}>
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
  
