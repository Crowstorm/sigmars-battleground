import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {connect} from 'react-redux'; 
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';


import {toggleTerrain, toggleScenery} from '../store/actions/battleground';


import { renderEmptyMap } from './functions/mainMapLogic';

class MainMapScreen extends React.Component {

    onToggleTerrain = () =>{
        this.props.toggleTerrain();
    }
    onToggleScenery = () =>{
        this.props.toggleScenery();
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                {renderEmptyMap(styles)}
                <Icon1 name="sword-cross" size={30} style={styles.terrainIcon} onPress={this.onToggleTerrain}></Icon1>
                <Icon2 name="milestone" size={30} style={styles.sceneryIcon} onPress={this.onToggleScenery}></Icon2>

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
    hideScenery:{
        opacity: 0
    },
    terrainIcon: {
        position: "absolute",
        alignSelf: 'flex-start',
        paddingTop: "42%",
        paddingLeft: "5%"
    },
    sceneryIcon: {
        position: "absolute",
        alignSelf: 'flex-end',
        paddingTop: "42%",
        paddingRight: "5%"
    }

})

const mapDispatchToProps = dispatch =>{
    return{
        toggleTerrain: () => dispatch(toggleTerrain()),
        toggleScenery: () => dispatch(toggleScenery())
    }
}

function mapStateToProps(store) {
    return {
        battleground: store.battleground,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMapScreen);
