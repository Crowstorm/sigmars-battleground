import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Barrel from '../../assets/terrain/barrel.png';
import Plot from '../../assets/terrain/palisade.png';
import Mountain from '../../assets/terrain/peaks.png';
import Tree from '../../assets/terrain/pine-tree.png';
import Test from '../../assets/terrain/test.png';


class Map extends React.Component {
    pickTerrainIndex = () => {
        return Math.floor(Math.random() * 4);
    }

    getTerrain = (index) => {
        switch (index) {
            case 0:
                return <Image style={styles.terrain} source={Barrel} />
            case 1:
                return <Image style={styles.terrain} source={Plot} />
            case 2:
                return <Image style={styles.terrain} source={Mountain} />
            case 3:
                return <Image style={styles.terrain} source={Tree} />
        }
    }

    render() {


        return (
            <View style={styles.mapContainer}>
                <View style={styles.mainSquare}>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                    <View style={styles.smallSquare}></View>
                </View>
                <View style={styles.mainSquare}>

                </View>
                <View style={styles.mainSquare}>

                </View>
                <View style={styles.mainSquare}>

                </View>
                <View style={styles.mainSquare}>

                </View>
                <View style={styles.mainSquare}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        borderColor: "blue",
        borderWidth: 1,
        width: "80%",
        height: "70%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        aspectRatio: 2 / 3,
    },
    mainSquare: {
        borderColor: "green",
        borderWidth: 1,
        width: '50%',
        aspectRatio: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallSquare: {
        borderColor: "pink",
        borderWidth: 1,
        width: '33%',
        aspectRatio: 1,
    },
    terrain: {
        width: 30,
        height: 30,
        position: "absolute",
        zIndex: 2,
    },
    hideTerrain: {
        opacity: 0
    },
    scenery: {
        width: 30,
        height: 30,
        position: "absolute",
    },
    hideScenery: {
        opacity: 0
    },
})


export default Map;