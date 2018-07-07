import {Navigation} from 'react-native-navigation';

import SplashScreen from './screens/splash';

//register screens
Navigation.registerComponent("battleground.SplashScreen", ()=> SplashScreen);

//start app

Navigation.startSingleScreenApp({
  screen: {
    screen: "battleground.SplashScreen",
    title: "Welcome"
  }
})