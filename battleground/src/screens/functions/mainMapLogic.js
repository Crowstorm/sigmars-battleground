import React from 'react';
import { View, Text } from 'react-native';
let smallSquareArray1 = [];
let smallSquareArray2 = [];
let smallSquareArray3 = [];
let smallSquareArray4 = [];
let smallSquareArray5 = [];
let smallSquareArray6 = [];

export const renderEmptyMap = (styles) => {
    let mainSquareArray = [];
    let smallSquareArray = [
        [], [], [], [], [], []
    ]




    for (let i = 0; i < 6; i++) {
        //number of terrains
        let diceRoll = doubleDiceRoll();
        let numberOfTerrains = getNumberOfTerrains(diceRoll);
        // small squares logic
        smallSquaresLoop(i, smallSquareArray[i], numberOfTerrains, styles);

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

//sproboj dodaj klasy
const smallSquaresLoop = (index, array, noOfTerr, styles) => {
    //type of terrain
    const terrains = ["A", "B", "C"];
    //indexes of smaller squares
    const squareIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //chosen indexes
    const shuffled = shuffle(squareIndex);
    console.log({shuffled})
    let selected = shuffled.slice(0, noOfTerr);

    for (let i = 0; i < 9; i++) {
        if (selected.length !== 0) {
            let isPicked = isSquarePicked(selected, i);
            if (isPicked) {
                smallSquareArray1.push(
                    <View style={styles.smallSquare}><Text> lol </Text></View>
                )
            } else {
                smallSquareArray1.push(
                    <View style={styles.smallSquare}></View>
                )
            }

        } else {
            smallSquareArray1.push(
                <View style={styles.smallSquare}></View>
            )
        }

    }


}


const isSquarePicked = (selected, index) => {
    for (let j = 0; j < selected.length; j++) {
        if (selected[j] === index) {
            console.log({selected}, {index})
            return true;

        } else {
            return false;
        }
    }
}

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




// for (let i = 0; i < 9; i++) {
//     let ifInserted = false;
//     //for each selected, jak zgadza sie z i, dodac teren
//     for (let j = 0; j < selected.length; i++) {
//         if (selected[j] === i) {
//             smallSquareArray1.push(
//                 <View style={styles.smallSquare}><Text>{selected[j]}</Text></View>
//             )
//             ifInserted = true;
//         }
//     }
//     if (ifInserted) {
//         continue;
//     } else {
//         this.smallSquareArray1.push(
//             <View style={styles.smallSquare}></View>
//         )
//     }
//     //    zrolluj efekt

// }