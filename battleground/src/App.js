import {Navigation} from 'react-native-navigation';

import SplashScreen from './screens/splash';
import MainMapScreen from './screens/mainMap';

//register screens
Navigation.registerComponent("battleground.SplashScreen", ()=> SplashScreen);
Navigation.registerComponent("battleground.MainMapScreen", () => MainMapScreen);

//start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "battleground.SplashScreen",
    title: "Welcome"
  }
})

//tabs
Navigation.startTabBasedApp({
  tabs:[
    {
      screen: "battleground.MainMapScreen",
    },
  ]
})