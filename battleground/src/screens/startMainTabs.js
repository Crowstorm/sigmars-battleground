import { Navigation } from 'react-native-navigation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';




const startTabs = () => {
    Promise.all([
         IconMaterialCommunityIcons.getImageSource("map-legend", 30), // 0 map
         IconFoundation.getImageSource("trees", 30) //1 tree
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "battleground.MainMapScreen",
                    label: "Battleground",
                    title: "Battleground",
                    icon: sources[0]
                },
                {
                    screen: "battleground.TerrainScreen",
                    label: "Terrain",
                    title: "Terrain",
                    icon: sources[1]
                },
            ]
        })
    });

}

export default startTabs;

