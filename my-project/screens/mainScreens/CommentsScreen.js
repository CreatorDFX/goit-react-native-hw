import React, { useState} from "react";
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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const handlerSubmit = () => {
    console.log(comment);
    setComment('')
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentsWrap}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>
                {item.username}
              </Text>
              <Text style={{ fontSize: 16 }}>{item.comment}</Text>
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
            onPress={handlerSubmit}
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
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 24,
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
});

export default CommentsScreen;
