import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import SplashScreen from './screens/splash';
import MainMapScreen from './screens/mainMap';
import TerrainScreen from './screens/terrain';

import configureStore from './store/configureStore'

const store1 = configureStore();

//register screens
Navigation.registerComponent("battleground.SplashScreen", ()=> SplashScreen, store1, Provider);
Navigation.registerComponent("battleground.MainMapScreen", () => MainMapScreen, store1, Provider);
Navigation.registerComponent("battleground.TerrainScreen", () => TerrainScreen, store1, Provider);

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