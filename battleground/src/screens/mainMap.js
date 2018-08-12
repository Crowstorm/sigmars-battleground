import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SquareGrid from "react-native-square-grid";

import {renderEmptyMap} from './functions/mainMapLogic';

class MainMapScreen extends React.Component {

    render() {
        return(
            renderEmptyMap(styles)
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

})

export default MainMapScreen;