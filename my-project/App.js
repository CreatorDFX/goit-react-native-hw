
import { StyleSheet, View, ImageBackground } from 'react-native';
import image from './assets/image/bgImg.jpg'
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen';

import  {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading  from 'expo';

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};


export default function App() {

  const [iasReady, setIasReady] = useState(false);

  
  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
      />
    );
  }

  
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <RegistrationScreen/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 400,
    height: 812,
  },
});
