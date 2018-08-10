import {Navigation} from 'react-native-navigation';

import SplashScreen from './screens/splash';
import MainMapScreen from './screens/mainMap';
import TerrainScreen from './screens/terrain';

//register screens
Navigation.registerComponent("battleground.SplashScreen", ()=> SplashScreen);
Navigation.registerComponent("battleground.MainMapScreen", () => MainMapScreen);
Navigation.registerComponent("battleground.TerrainScreen", () => TerrainScreen);

//start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "battleground.SplashScreen",
    title: "Welcome"
  }
})

// //tabs
// Navigation.startTabBasedApp({
//   tabs:[
//     {
//       screen: "battleground.MainMapScreen",
//     },
//   ]
// })