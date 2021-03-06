import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import { renderEmptyMap } from './functions/mainMapLogic';

class MainMapScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {renderEmptyMap(styles)}
                <Icon1 name="sword-cross" size={30} style={styles.swordIcon} onPress={() => alert('dziala')}></Icon1>
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
        paddingTop: "5%",
        flexDirection: "column",
        position: 'relative'
        //justifyContent: "center"
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
    },
    terrain: {
        width: 30,
        height: 30,
        position: "absolute",
        zIndex: 2
    },
    scenery: {
        width: 30,
        height: 30,
        position: "absolute",
    },
    swordIcon: {
        position: "absolute",
        alignSelf: 'flex-start',
        paddingTop: "42%",
        paddingLeft: "5%"
    }

})

export default MainMapScreen;