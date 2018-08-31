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

const MapLegend = () => {
    return (
        <Modal>
            <View style={styles.buttonContainer}>
                <Image source={TerrainActive} style={styles.button}/>
                <Image source={SceneryActive} style={styles.button}/>
            </View>
            <ScrollView>
                <View>
                    <Image source={Damned} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Damned: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <Image source={Arcane} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Arcane: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <Image source={Inspiring} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Inspiring: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <Image source={Deadly} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Deadly: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <Image source={Mystical} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Mystical: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
                <View>
                    <Image source={Sinister} style={styles.icon} />
                    <Text><Text style={styles.textBold}>Sinister: </Text>At the start of your hero phase, you can pick one friendly unit within 1" of a Damned terrain feature to make a sacrifice. If you do so, that unit suffers D3 mortal wounds, but you can re-roll hit rolls of 1 for it until your next hero phase.</Text>
                </View>
            </ScrollView>

        </Modal>
    )
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
    buttonContainer:{
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "pink"
    },
    button:{
        height: 40,
        width: 40
    },
    text: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 16
    },
    icon: {
        height: 30,
        width: 30
    }
})

export default MapLegend