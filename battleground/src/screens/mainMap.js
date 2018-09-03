import React from 'react';
import { View, Text, TouchableOpacity, Button, Image, Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

import Info from '../assets/buttons/info.png'

import TerrainActive from '../assets/buttons/terrainActive.png';
import Terrain from '../assets/buttons/terrain.png';
import SceneryActive from '../assets/buttons/sceneryActive.png';
import Scenery from '../assets/buttons/scenery.png';

import { toggleTerrain, toggleScenery, pushPickedSquares, rollNumberOfTerrains, pickSquares, incrementHelperIndex, zeroHelperIndex, setTerrainFlag, toggleMapLegend } from '../store/actions/battleground';
import { renderEmptyMap } from './functions/mainMapLogic';

import Map from './components/map';
import MapLegend from './components/modalMapLegend';

class MainMapScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'black'
    };
    constructor(props) {
        super(props);
        // this.state = {
        //     modalVisible: false,
        // };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = (e) =>{
        if(e.type === 'NavBarButtonPress'){
            if(e.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left",
                });
            }
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onToggleTerrain = () => {
        this.props.toggleTerrain();
    }
    onToggleScenery = () => {
        this.props.toggleScenery();
    }

    handleMapGeneration = () => {
        this.props.rollNumberOfTerrains();
        this.props.pickSquares();
    }

    handleRenderTerrainButton = () => {
        if (this.props.battleground.terrainVisibility) {
            return (
                <TouchableOpacity style={styles.terrainIconContainer} onPress={this.onToggleTerrain}>
                    <Image source={TerrainActive} style={styles.terrainIcon} />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={styles.terrainIconContainer} onPress={this.onToggleTerrain}>
                <Image source={Terrain} style={styles.terrainIcon} />
            </TouchableOpacity>
        )
    }

    handleRenderSceneryButton = () => {
        if (this.props.battleground.sceneryVisibility) {
            return (
                <TouchableOpacity style={styles.sceneryIconContainer} onPress={this.onToggleScenery}>
                    <Image source={SceneryActive} style={styles.sceneryIcon} />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={styles.sceneryIconContainer} onPress={this.onToggleScenery}>
                <Image source={Scenery} style={styles.sceneryIcon} />
            </TouchableOpacity>
        )
    }

    render() {
        let terrainButton = this.handleRenderTerrainButton();
        let sceneryButton = this.handleRenderSceneryButton();
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <MapLegend {...this.props}/>

                {/* <Icon1 name="sword-cross" size={30} style={styles.terrainIcon} onPress={this.onToggleTerrain}></Icon1> */}
                {terrainButton}
                <Map {...this.props} />
                {/* <Icon2 name="milestone" size={30} style={styles.sceneryIcon} onPress={this.onToggleScenery}></Icon2> */}
                {sceneryButton}

                <TouchableOpacity style={styles.generatorButton} onPress={this.handleMapGeneration} >
                    <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                        <View>
                            <Text style={styles.generatorButtonText}>Generate Map</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { this.props.toggleMapLegend()}}>
                    <Image
                        source={Info}
                        style={styles.infoIcon}
                    />
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#1b2936",
        borderWidth: 1,
        alignItems: "center",
        paddingTop: "5%",
        flexDirection: "column",
        position: 'relative'
        //justifyContent: "center"
    },
    terrainIconContainer: {
        position: "absolute",
        alignSelf: 'flex-start',
        paddingTop: "150%",
        paddingLeft: "17%",
        //   flex: 1
    },
    terrainIcon: {
        height: 40,
        width: 40
    },
    sceneryIconContainer: {
        position: "absolute",
        alignSelf: 'flex-end',
        paddingTop: "265%",
        paddingRight: "5%"
    },
    sceneryIcon: {
        height: 40,
        width: 40
    },
    generatorButton: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15
    },
    generatorButtonText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight: "bold",
        fontSize: 16,
        padding: 10
    },
    infoIcon: {
        height: 30,
        width: 30,
        marginTop: "3%"
    }

})

const mapDispatchToProps = dispatch => {
    return {
        toggleTerrain: () => dispatch(toggleTerrain()),
        toggleScenery: () => dispatch(toggleScenery()),
        rollNumberOfTerrains: () => dispatch(rollNumberOfTerrains()),
        pickSquares: () => dispatch(pickSquares()),
        incrementHelperIndex: () => dispatch(incrementHelperIndex()),
        zeroHelperIndex: () => dispatch(zeroHelperIndex()),
        setTerrainFlag: (index1, index2) => dispatch(setTerrainFlag(index1, index2)),
        toggleMapLegend: () => dispatch(toggleMapLegend()),
    }
}

function mapStateToProps(store) {
    return {
        battleground: store.battleground,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMapScreen);
