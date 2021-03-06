import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import SplashScreen from './screens/splash';
import MainMapScreen from './screens/mainMap';
import TerrainScreen from './screens/terrain';

import configureStore from './store/configureStore'

const store = configureStore;

//register screens
Navigation.registerComponent("battleground.SplashScreen", ()=> SplashScreen, store, Provider);
Navigation.registerComponent("battleground.MainMapScreen", () => MainMapScreen, store, Provider);
Navigation.registerComponent("battleground.TerrainScreen", () => TerrainScreen, store, Provider);

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