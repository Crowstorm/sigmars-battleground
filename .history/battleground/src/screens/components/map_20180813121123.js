import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Map extends React.Component {
    render() {
        return (
            <View style={styles.mapContainer}>
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