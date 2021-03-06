import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import _ from 'lodash';

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


class Map extends React.Component {
    getTerrain = (index) => {
        this.props.setTerrainFlag(0, 0)
        switch (index) {
            case 0:
                return <Image style={styles.terrain} source={Barrel} />
            case 1:
                return <Image style={styles.terrain} source={Plot} />
            case 2:
                return <Image style={styles.terrain} source={Mountain} />
            case 3:
                return <Image style={styles.terrain} source={Tree} />
            case 4:
                return <Image style={styles.terrain} source={Tent} />
        }
    }

    getScenery = (index) => {
        switch (index) {
            case 1:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Damned} />
            case 2:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Arcane} />
            case 3:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Inspiring} />
            case 4:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Deadly} />
            case 5:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Mystical} />
            case 6:
                return <Image style={(this.props.battleground.terrainVisibility) ? styles.scenery : styles.scenerySolo} source={Sinister} />
        }
    }

    renderScenery = (i, j) => {
        if (this.props.battleground.pickedSquares.length !== 0 && this.props.battleground.numberOfTerrains.length !== 0) {
            let valueTable = this.props.battleground.pickedSquares[i];
            //check if its the proper small square
            if (valueTable.length !== 0) {
                for (let z = 0; z < valueTable.length; z++) {
                    if (j === valueTable[z][0]) {
                        //roll terrain
                        if (this.props.battleground.sceneryVisibility) {
                            return this.getScenery(valueTable[z][2]);                        }
                    }
                }
            }

            // if (valueTable.length !== 0 && j === valueTable[0][0]) {
            //     // roll scenery
            //     if (this.props.battleground.sceneryVisibility) {
            //         return this.getScenery(valueTable[0][2]);
            //     }
            // }
        }
    }

    renderTerrain = (i, j) => {
        if (this.props.battleground.pickedSquares.length !== 0 && this.props.battleground.numberOfTerrains.length !== 0) {
            let valueTable = this.props.battleground.pickedSquares[i];
            //check if its the proper small square
            if (valueTable.length !== 0) {
                for (let z = 0; z < valueTable.length; z++) {
                    if (j === valueTable[z][0]) {
                        //roll terrain
                        if (this.props.battleground.terrainVisibility) {
                            return this.getTerrain(valueTable[z][1]);
                        }
                    }
                }
            }
        }
    }

    renderEmptyGrid() {
        let mainSquares = [0, 1, 2, 3, 4, 5];
        let subSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        return _.map(mainSquares, (square, i) => {
            return <View style={styles.mainSquare} key={`main${i}`}>
                {_.map(subSquares, (smallSquare, j) => {
                    return <View style={styles.smallSquare} key={`sub${i}${j}`}></View>
                })}
            </View>
        })
    }

    renderGrid() {
        let mainSquares = [0, 1, 2, 3, 4, 5];
        let subSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        return _.map(mainSquares, (square, i) => {
            return <View style={styles.mainSquare} key={`main${i}`}>
                {_.map(subSquares, (smallSquare, j) => {
                    return <View style={styles.smallSquare} key={`sub${i}${j}`}>{this.renderScenery(i, j)}{this.renderTerrain(i, j)}</View>
                })}
            </View>
        })
    }

    render() {
        console.log(this.props)
        let content = (this.props.battleground.numberOfTerrains.length > 0) ? this.renderGrid() : this.renderEmptyGrid();
        return (
            <View style={styles.mapContainer}>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        borderColor: "#AB7A30",
        borderWidth: 1,
        width: "80%",
        height: "70%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        aspectRatio: 2 / 3,
    },
    mainSquare: {
        borderColor: "#AB7A30",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        width: '50%',
        aspectRatio: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallSquare: {
        //   borderColor: "pink",
        // borderWidth: 1,
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
        width: 20,
        height: 20,
        position: "absolute",
        zIndex: 3
    },
    scenerySolo:{
        width: 40,
        height: 40,
       // position: "absolute",
       // zIndex: 3
    },
    hideScenery: {
        opacity: 0
    },
})


export default Map;