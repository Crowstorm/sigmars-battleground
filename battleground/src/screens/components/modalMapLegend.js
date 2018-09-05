import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button, Image, Modal, StyleSheet } from 'react-native';

import Barrel from '../../assets/terrain/barrel.png';
import Plot from '../../assets/terrain/palisade.png';
import Mountain from '../../assets/terrain/peaks.png';
import Tree from '../../assets/terrain/pine-tree.png';
import Tent from '../../assets/terrain/tent.png';

import Test from '../../assets/terrain/test.png';
import Arcane from '../../assets/scenery/arcane.png';
import Damned from '../../assets/scenery/damned.png';
import Deadly from '../../assets/scenery/deadly.png';
import Inspiring from '../../assets/scenery/inspiring.png';
import Mystical from '../../assets/scenery/mystical.png';
import Sinister from '../../assets/scenery/sinister.png';

import TerrainActive from '../../assets/buttons/terrainActive.png';
import Terrain from '../../assets/buttons/terrain.png';
import SceneryActive from '../../assets/buttons/sceneryActive.png';
import Scenery from '../../assets/buttons/scenery.png';
import Cancel from '../../assets/buttons/cancel.png';

class MapLegend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            terrainLegend: false,
            sceneryLegend: true,
        }
    }

    renderToggleScenery = () => {
        if (this.state.sceneryLegend) {
            return (
                <TouchableOpacity onPress={this.handleToggleScenery}>
                    <Image source={SceneryActive} style={styles.button} />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={this.handleToggleScenery}>
                <Image source={Scenery} style={styles.button} />
            </TouchableOpacity>
        )
    }

    renderToggleTerrain = () => {
        if (this.state.terrainLegend) {
            return (
                <TouchableOpacity onPress={this.handleToggleTerrain}>
                    <Image source={TerrainActive} style={styles.button} />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={this.handleToggleTerrain}>
                <Image source={Terrain} style={styles.button} />
            </TouchableOpacity>
        )
    }

    handleToggleScenery = () => {
        this.setState({
            sceneryLegend: !this.state.sceneryLegend
        })
        this.setState({
            terrainLegend: !this.state.terrainLegend
        })
    }
    handleToggleTerrain = () => {
        this.setState({
            terrainLegend: !this.state.terrainLegend
        })
        this.setState({
            sceneryLegend: !this.state.sceneryLegend
        })
    }

    renderSceneryInfo = () => {
        return (
            <View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Damned} style={styles.icon} />
                    </View>
                    <Text style={styles.text}><Text style={styles.textBold}>Damned: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Arcane} style={styles.icon} />
                    </View>

                    <Text style={styles.text}><Text style={styles.textBold}>Arcane: </Text>Add 1 to casting or unbinding rolls for Wizards
while they are within 1" of any Arcane terrain features.</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Inspiring} style={styles.icon} />
                    </View>
                    <Text style={styles.text}><Text style={styles.textBold}>Inspiring: </Text>Add 1 to the Bravery characteristic of units while
they are within 1" of any Inspiring terrain features.</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Deadly} style={styles.icon} />
                    </View>
                    <Text style={styles.text}><Text style={styles.textBold}>Deadly: </Text>Roll a dice for each unit that finishes a normal
move or charge move within 1" of any Deadly terrain
features. On a 1, that unit suffers D3 mortal wounds.</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Mystical} style={styles.icon} />
                    </View>
                    <Text style={styles.text}><Text style={styles.textBold}>Mystical: </Text>Roll a dice each time you allocate a wound or
mortal wound to a model within 1" of any Mystical terrain
features. On a 6+ the wound or mortal wound is negated.</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Image source={Sinister} style={styles.icon} />
                    </View>
                    <Text style={styles.text}><Text style={styles.textBold}>Sinister: </Text>Subtract 1 from the Bravery characteristic of units
while they are within 1" of any Sinister terrain features.</Text>
                </View>
            </View>
        )
    }

    renderTerrainInfo = () => {
        return (
            <View>
                <View style={styles.iconContainer}>
                    <Image source={Barrel} style={styles.icon} />
                </View>
                <Text style={styles.text}>
                    Small item that is not really an obstacle. May serve as atmospheric piece on the battlefield.
                </Text>

                <View style={styles.iconContainer}>
                    <Image source={Plot} style={styles.icon} />
                </View>
                <Text style={styles.text}>
                    A fence, wall, something that is long, obstructs movement and might serve as a cover.
                </Text>

                <View style={styles.iconContainer}>
                    <Image source={Tent} style={styles.icon} />
                </View>
                <Text style={styles.text}>
                    A tent, house, building, camp, whatever fits your board. Might serve as a cover, atmospheric piece or scenery container. Sinister camps are spooky.
                </Text>

                <View style={styles.iconContainer}>
                    <Image source={Tree} style={styles.icon} />
                </View>
                <Text style={styles.text}>
                    A single tree or forest, whatever fits your need. Provides cover and a shade for tired troops.
                </Text>

                <View style={styles.iconContainer}>
                    <Image source={Mountain} style={styles.icon} />
                </View>
                <Text style={styles.text}>
                    A huge mountain or elevated terrain depending on your inventory and battlefield.
                </Text>
            </View>
        )
    }

    render() {
        let sceneryButton = this.renderToggleScenery();
        let terrainButton = this.renderToggleTerrain();

        let sceneryInfo = this.renderSceneryInfo();
        let terrainInfo = this.renderTerrainInfo();

        let legend = (this.state.sceneryLegend) ? sceneryInfo : terrainInfo;
        return (
            <Modal
                visible={this.props.battleground.modalOpen}
                onRequestClose={() => { }}
                animationType="slide">
                <View style={styles.buttonContainer}>
                    {terrainButton}
                    {sceneryButton}
                </View>
                <ScrollView>
                    {legend}
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.toggleMapLegend()}>
                        <Image source={Cancel} style={styles.button} />
                    </TouchableOpacity>
                </View>
            </Modal>
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
    buttonContainer: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        //  borderWidth: 1,
        // borderColor: "pink",
        backgroundColor: "#192f6a"
    },
    button: {
        height: 40,
        width: 40
    },
    text: {
        // color: "#AB7A30",
        // textShadowOffset: { width: 1, height: 1 },
        // textShadowColor: "black",
        // textShadowRadius: 1,
        paddingLeft: "5%",
        paddingRight: "5%",
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 16
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "3%",
        paddingBottom: "1%"
    },
    icon: {
        height: 30,
        width: 30
    }
})

export default MapLegend