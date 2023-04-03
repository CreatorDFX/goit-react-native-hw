import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import BackgroundImage from "../../components/BackgroundImg";
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import LogoutBtn from "../../components/LogoutButton/LogoutBtn";


const ProfileScreen = ({navigation}) => {
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
         <LogoutBtn navigation={navigation}/>
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