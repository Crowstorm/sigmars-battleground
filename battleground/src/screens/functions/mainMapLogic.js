import React from 'react';
import { View, Text } from 'react-native';

export const renderEmptyMap = (styles) => {
    let mainSquareArray = [];
    let smallSquareArray = [
        [],[],[],[],[],[]
    ]
    let smallSquareArray1 = [];
    let smallSquareArray2 = [];
    let smallSquareArray3 = [];
    let smallSquareArray4 = [];
    let smallSquareArray5 = [];
    let smallSquareArray6 = [];

    // generowac zawartosc w for loopie, za kazdym razem bedzie inna, i bedzie odpowiadac wylosowanym polom


    for (let i = 0; i < 6; i++) {
        //number of terrains
        let diceRoll = doubleDiceRoll();
        let numberOfterrains = getNumberOfTerrains(diceRoll);
        // small squares logic
        smallSquaresLoop(i, smallSquareArray[i], diceRoll);

        //loop po malych kwadratach
        mainSquareArray.push(
            <View style={styles.mainSquare}>
                {smallSquareArray1}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                {mainSquareArray}
            </View>
        </View>
    )
};

const singleDiceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const doubleDiceRoll = () => {
    let firstDice = singleDiceRoll();
    let secondDice = singleDiceRoll();
    let total = firstDice + secondDice;
    return total;
}

const getNumberOfTerrains = (diceRoll) =>{
    
}

const smallSquaresLoop = (index, array, noOfTerr) => {
    //type of terrain
    const terrains = ["A", "B", "C"];
    //indexes of smaller squares
    const squareIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //chosen indexes
    const shuffled = squareIndex.sort(() => .5 - Math.random());
    let selected = shuffled.slice(0,noOfTerr);

    console.log({selected})
    // for (let i = 0; i < 9; i++) {
    //     //for each selected, jak zgadza sie z i, dodac teren
    //     smallSquareArray1.push(
    //         <View style={styles.smallSquare}></View>
    //     )
    // }
}