import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import _ from 'lodash';

import Barrel from '../../assets/terrain/barrel.png';
import Plot from '../../assets/terrain/palisade.png';
import Mountain from '../../assets/terrain/peaks.png';
import Tree from '../../assets/terrain/pine-tree.png';
import Test from '../../assets/terrain/test.png';


class Map extends React.Component {
    pickTerrainIndex = () => {
        return Math.floor(Math.random() * 4);
    }

    getTerrain = (index) => {
        switch (index) {
            case 0:
                return <Image style={styles.terrain} source={Barrel} />
            case 1:
                return <Image style={styles.terrain} source={Plot} />
            case 2:
                return <Image style={styles.terrain} source={Mountain} />
            case 3:
                return <Image style={styles.terrain} source={Tree} />
        }
    }

    getScenery = (index) => {
        switch (index) {
            case 1:
                return <Image style={styles.scenery} source={Test} />
            case 2:
                return <Image style={styles.scenery} source={Test} />
            case 3:
                return <Image style={styles.scenery} source={Test} />
            case 4:
                return <Image style={styles.scenery} source={Test} />
            case 5:
                return <Image style={styles.scenery} source={Test} />
            case 6:
                return <Image style={styles.scenery} source={Test} />
        }
    }

    renderGrid() {
        let mainSquares = [0, 1, 2, 3, 4, 5];
        let subSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        return _.map(mainSquares, (square, i) => {
            return <View style={styles.mainSquare} key={`main${i}`}>
                {_.map(subSquares, (smallSquare, j) =>{
                    return <View style={styles.smallSquare} key={`sub${i}${j}`}></View>
                })}
            </View>
        })

        // return _.map(mainSquares, row => {
        //     return <div key={`row${row[0].y}`} className="row" style={{ margin: 0 }}> {_.map(row, cell => {
        //         return <div key={cell.x + '.' + cell.y} id={'d' + cell.x + '_' + cell.y} style={{ height: 32, width: 32, boxSizing: 'border-box' }}> {/*x: {cell.x}, y: {cell.y} */} {this.renderPosition(cell)} </div>
        //     })
        //     } </div>
        // })
    }

    renderSquareContent = () => {
        return (
            <View>

            </View>
        )
    }

    render() {
        let squareContent = this.renderSquareContent();
        let content = this.renderGrid();
        return (
            <View style={styles.mapContainer}>
                {content}
            </View>
        )
    }
}



// {/* <View style={styles.mainSquare}>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>
// <View style={styles.smallSquare}>{squareContent}</View>

// </View>
// <View style={styles.mainSquare}>

// </View>
// <View style={styles.mainSquare}>

// </View>
// <View style={styles.mainSquare}>

// </View>
// <View style={styles.mainSquare}>

// </View>
// <View style={styles.mainSquare}> */}

// </View>

const styles = StyleSheet.create({
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
    hideScenery: {
        opacity: 0
    },
})


export default Map;