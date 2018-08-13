import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

import { toggleTerrain, toggleScenery, pushPickedSquares, rollNumberOfTerrains, pickSquares } from '../store/actions/battleground';
import { renderEmptyMap } from './functions/mainMapLogic';

import Map from './components/map';

class MainMapScreen extends React.Component {

    onToggleTerrain = () => {
        this.props.toggleTerrain();
    }
    onToggleScenery = () => {
        this.props.toggleScenery();
    }

    handleMapGeneration = () => {
        this.props.rollNumberOfTerrains();
        this.props.pickSquares(this.props.battleground);
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Icon1 name="sword-cross" size={30} style={styles.terrainIcon} onPress={this.onToggleTerrain}></Icon1>
                <Map {...this.props} />
                <Icon2 name="milestone" size={30} style={styles.sceneryIcon} onPress={this.onToggleScenery}></Icon2>
                <Button title="Generate Map" onPress={this.handleMapGeneration} style={styles.generatorButton} />


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
    },
    generatorButton: {
        // position: "absolute",
    }

})

const mapDispatchToProps = dispatch => {
    return {
        toggleTerrain: () => dispatch(toggleTerrain()),
        toggleScenery: () => dispatch(toggleScenery()),
        rollNumberOfTerrains: () => dispatch(rollNumberOfTerrains()),
        pickSquares: () => dispatch(pickSquares()),
    }
}

function mapStateToProps(store) {
    return {
        battleground: store.battleground,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMapScreen);
