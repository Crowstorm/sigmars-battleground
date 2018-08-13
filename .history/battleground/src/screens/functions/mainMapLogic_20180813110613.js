import React from 'react';
import { View, Text, Image } from 'react-native';

import Barrel from '../../assets/terrain/barrel.png';
import Plot from '../../assets/terrain/palisade.png';
import Mountain from '../../assets/terrain/peaks.png';
import Tree from '../../assets/terrain/pine-tree.png';
import Test from '../../assets/terrain/test.png';

let smallSquareArray1 = [];
let smallSquareArray2 = [];
let smallSquareArray3 = [];
let smallSquareArray4 = [];
let smallSquareArray5 = [];
let smallSquareArray6 = [];

let smallSquareArray = [
    [], [], [], [], [], []
]

export const renderEmptyMap = (styles, props) => {
    let mainSquareArray = [];
    // let smallSquareArray = [
    //     [], [], [], [], [], []
    // ]




    for (let i = 0; i < 6; i++) {
        //number of terrains
        let diceRoll = doubleDiceRoll();
        let numberOfTerrains = getNumberOfTerrains(diceRoll);
        // small squares logic
        smallSquaresLoop(i, smallSquareArray[i], numberOfTerrains, styles, props);

        //loop po malych kwadratach
        mainSquareArray.push(
            <View style={styles.mainSquare}>
                {smallSquareArray[i]}
            </View>
        )
    }

    return (
            <View style={styles.mapContainer}>
                {mainSquareArray}
            </View>
    )
};

const smallSquaresLoop = (index, array, noOfTerr, styles, props) => {
    const terrainIndex = [0, 1, 2, 3];
    const squareIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const shuffled = shuffle(squareIndex);
    let selected = shuffled.slice(0, noOfTerr);

    for (let i = 0; i < 9; i++) {
        if (selected.length !== 0) {
            let isPicked = isSquarePicked(selected, i);
            if (isPicked) {
                let terrainIndex = pickTerrainIndex();
                smallSquareArray[index].push(
                     <View style={styles.smallSquare}>{getTerrain(styles, terrainIndex, props)}{getScenery(styles, props)}</View>
                )
            } else {
                smallSquareArray[index].push(
                    <View style={styles.smallSquare}></View>
                )
            }

        } else {
            smallSquareArray[index].push(
                <View style={styles.smallSquare}></View>
            )
        }

    }
}

const isSquarePicked = (selected, index) => {
    for (let j = 0; j < selected.length; j++) {
        if (selected[j] == index) {
            return true;
        }
    }
}

const singleDiceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const pickTerrainIndex = () => {
    return Math.floor(Math.random() * 4);
}

const getTerrain = (styles, index, props) => {
    switch (index) {
        case 0:
            return <Image style={[styles.terrain, props.battleground.terrainVisibility ? styles.terrain : styles.hideTerrain]} source={Barrel} />
        case 1:
            return <Image style={[styles.terrain, props.battleground.terrainVisibility ? styles.terrain : styles.hideTerrain]} source={Plot} />
        case 2:
            return <Image style={[styles.terrain, props.battleground.terrainVisibility ? styles.terrain : styles.hideTerrain]} source={Mountain} />
        case 3:
            return <Image style={[styles.terrain, props.battleground.terrainVisibility ? styles.terrain : styles.hideTerrain]} source={Tree} />
    }
}

const getScenery = (styles) => {
    let diceRoll = singleDiceRoll();

    switch (diceRoll) {
        case 1:
            return <Image style={styles.scenery} source={Test} />
        case 2:
            return <Image style={styles.scenery} source={Test} />
        case 3:
            return <Image style={styles.scenery} source={Test} />
        case 4:
            return <Image style={styles.scenery}source={Test} />
        case 5:
            return <Image style={styles.scenery} source={Test} />
        case 6:
            return <Image style={styles.scenery} source={Test} />
    }
}

const doubleDiceRoll = () => {
    let firstDice = singleDiceRoll();
    let secondDice = singleDiceRoll();
    let total = firstDice + secondDice;
    return total;
}

const getNumberOfTerrains = (diceRoll) => {
    switch (diceRoll) {
        case 2:
        case 3:
            return 0;
        case 4:
        case 5:
        case 9:
        case 10:
            return 2;
        case 6:
        case 7:
        case 8:
            return 1;
        case 11:
        case 12:
            return 3;
    }
}

//shuffling array algorythm
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}