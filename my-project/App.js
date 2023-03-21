
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen';

// import  {useState} from 'react';
// import * as Font from 'expo-font';
// import AppLoading  from 'expo';

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };


export default function App() {

  // const [iasReady, setIasReady] = useState(false);

  
  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIasReady(true)}
  //     />
  //   );
  // }

  
  return (
    <View  style={{ flex: 1 }}>
        <RegistrationScreen/>
    </View>
  );
}