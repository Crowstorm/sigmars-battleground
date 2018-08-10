import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SquareGrid from "react-native-square-grid";

class MainMapScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <View style={styles.mainSquare} id="o1">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>

                    <View style={styles.mainSquare} id="o2">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>

                    <View style={styles.mainSquare} id="o3">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>

                    <View style={styles.mainSquare} id="o4">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>

                    <View style={styles.mainSquare} id="o5">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>

                    <View style={styles.mainSquare} id="o6">
                        <View style={styles.smallSquare} id="i1"></View>
                        <View style={styles.smallSquare} id="i2"></View>
                        <View style={styles.smallSquare} id="i3"></View>
                        <View style={styles.smallSquare} id="i4"></View>
                        <View style={styles.smallSquare} id="i5"></View>
                        <View style={styles.smallSquare} id="i6"></View>
                        <View style={styles.smallSquare} id="i7"></View>
                        <View style={styles.smallSquare} id="i8"></View>
                        <View style={styles.smallSquare} id="i9"></View>
                    </View>
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