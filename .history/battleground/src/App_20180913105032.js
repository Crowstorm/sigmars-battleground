import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import SplashScreen from './screens/splash';
import MainMapScreen from './screens/mainMap';
import DiceScreen from './screens/dice';
import SideDrawer from './screens/components/sideDrawer';
import SwitchToCustomOptionsScreen from './screens/switchToCustomOptions';
import GoBackToMainScreen from './screens/goBackToMain';

import configureStore from './store/configureStore'

const store = configureStore();

//register screens
Navigation.registerComponent("battleground.SplashScreen", () => SplashScreen, store, Provider);
Navigation.registerComponent("battleground.MainMapScreen", () => MainMapScreen, store, Provider);
Navigation.registerComponent("battleground.DiceScreen", () => DiceScreen, store, Provider);
Navigation.registerComponent("battleground.SwitchToCustomOptionsScreen", () => SwitchToCustomOptionsScreen);
Navigation.registerComponent("battleground.GoBackToMainScreen", () => GoBackToMainScreen);


//start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "battleground.SplashScreen",
    title: "AoS Battleground"
  }
})

Navigation.registerComponent(
  "battleground.SideDrawer",
  () => SideDrawer, store, Provider
);
