import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import firebase from '../../firebase/config';
import { useSelector } from "react-redux";
import { selectProfileImg, selectUserName } from "../../redux/auth/authSelectors";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { name } = useSelector((state) => state.auth);

const profileImg = useSelector(selectProfileImg)

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(comment)

  useEffect(() => {
    getAllPosts();
  }, []);
  const createPost = async () => {
    firebase.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, name });
      setComment('')
  };

  const getAllPosts = async () => {
    firebase.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentsWrap}>  
            <View style={styles.comments}>
            <Text style={{ fontSize: 16, }}>{item.comment}</Text>
          </View>
              <View style={styles.avatar}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />  
          </View>
        
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <TextInput 
            value={comment}
            style={styles.input}
            placeholder="Comment..."
            onChangeText={setComment}
           
          />
          <TouchableOpacity
            disabled={!comment}
            onPress={createPost}
            style={styles.commentBtn}
          >
            <AntDesign name="arrowup" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },

  inputContainer: {
    marginHorizontal: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  commentsWrap: {
  flex: 1,
  flexDirection: 'row',
  padding: 16,
  },
  avatar: {
    marginLeft: 16,
  },
  comments: {
    width: 300,
    minHeight: 70,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  commentBtn: {
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    right: 5,
    top: 8,
  },
 
  profileImg: {
    width: 28,
    height: 28,
    borderRadius: 16,
  },
});

export default CommentsScreen;
