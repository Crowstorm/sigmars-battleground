import { Navigation } from 'react-native-navigation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'




const startTabs = () => {
    Promise.all([
        IconMaterialCommunityIcons.getImageSource("map-legend", 30), // 0 map
        IconFoundation.getImageSource("trees", 30), //1 tree
        IconFontAwesome5.getImageSource("dice", 30), //2 dice
        IconMaterialCommunityIcons.getImageSource("menu", 30) //3 sidedrawer icon
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "battleground.MainMapScreen",
                    label: "Battleground",
                    title: "Battleground",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "battleground.DiceScreen",
                    label: "Dice",
                    title: "Dice",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
            ],
            drawer: {
                left: {
                    screen: "battleground.SideDrawer"
                }
            },
            tabsStyle: {
                tabBarSelectedButtonColor: "#AB7A30",
            },
            appStyle: {
                tabBarSelectedButtonColor: "#AB7A30",
            }
        })
    });

}

export default startTabs;

