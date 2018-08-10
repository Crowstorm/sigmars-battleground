import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "battleground.MainMapScreen",
                label: "Battleground",
                title: "Battleground"
            },
        ]
    })
}

export default startTabs;

