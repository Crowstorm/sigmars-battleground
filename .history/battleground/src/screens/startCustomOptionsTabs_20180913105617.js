import { Navigation } from 'react-native-navigation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';

const startTabs = () => {
    Promise.all([
        IconMaterialCommunityIcons.getImageSource("menu", 30), //0 sidedrawer icon
        IconEntypo.getImageSource("back", 30), //1 back to main tabs
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "battleground.MainMapScreen",
                    label: "Terrain",
                    title: "Add Your Terrain",
                    icon: require('../assets/buttons/windmill.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[0],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                // {
                //     screen: "battleground.GoBackToMainScreen",
                //     label: "Go Back",
                //     title: "Go Back",
                //     icon: sources[1],
                //     navigatorButtons: {
                //         leftButtons: [
                //             {
                //                 icon: sources[0],
                //                 title: "Menu",
                //                 id: "sideDrawerToggle"
                //             }
                //         ]
                //     }
                // },
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
            },
        })
    });

}

export default startTabs;