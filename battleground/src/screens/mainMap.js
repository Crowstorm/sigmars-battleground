import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SquareGrid from "react-native-square-grid";

class MainMapScreen extends React.Component {


    render() {
        let mainSquareArray = [];
        let smallSquareArray = [];

        for (let i = 0; i < 9; i++) {
            smallSquareArray.push(
                <View style={styles.smallSquare}></View>
            )
        }

        for (let i = 0; i < 6; i++) {
            mainSquareArray.push(
                <View style={styles.mainSquare}>
                    {smallSquareArray}
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    {mainSquareArray}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "red",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
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
    }
    // item: {
    //     flex: 1,
    //     alignSelf: "stretch",
    //     // padding: 16
    // },
    // content: {
    //     flex: 1,
    //     borderColor: "green",
    //     borderWidth: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // text: {
    //     color: "white",
    //     fontSize: 32
    // }
})

export default MainMapScreen;