
import {
  View,
  StyleSheet,
  TouchableOpacity, 
  Text,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import BackgroundImage from "../../components/BackgroundImg";
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 


const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
    <BackgroundImage/>
        <View style={styles.container}> 
        <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
            <AntDesign name="closecircleo" size={24} color="#BDBDBD" style={styles.addBtn} />
            </View>
          </View>
           <Text style={styles.userName}>Natali Romanova</Text>
          <TouchableOpacity style={styles.logoutBtn}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <View style={styles.navigateContainer} >
          <TouchableOpacity>
          <Octicons name="apps" size={24} color="#212121" />
          </TouchableOpacity>
            <TouchableOpacity style={styles.createPostBtn} >
            <Feather name="plus" size={14} color="white" />
            </TouchableOpacity>
          <TouchableOpacity>
          <Feather name="user" size={24} color="#212121" />
          </TouchableOpacity>
        </View>
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
    top: 84,
  },
  userName: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginVertical: 32,
    fontFamily: "Roboto-Medium",
  },
  logoutBtn: {
    position: 'absolute',
    right: 15, 
    top: 15,
  },
  navigateContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: 88,
    padding: 11,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  createPostBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginHorizontal: 31,
    borderColor: "transparent",
    backgroundColor: "#FF6C00",
  },
});

export default ProfileScreen;