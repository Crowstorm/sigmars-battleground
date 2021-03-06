export const toggleTerrain = () =>{
    return {
        type: 'TOGGLE_TERRAIN',
    }
}

export const toggleScenery = () =>{
    return {
        type: 'TOGGLE_SCENERY',
    }
}

export const pushPickedSquares = (array) =>{
    const shuffled = shuffle(array);
    let selected = shuffled.slice(0, noOfTerr);
    return{
        type: 'PICKED_SQUARES',
        array
    }
}

export const rollNumberOfTerrains = () =>{
     let value = [];
     for(let i = 0; i < 6; i++){
        let diceRoll = doubleDiceRoll();
        value.push(getNumberOfTerrains(diceRoll));
     }
    return{
        type: 'TERRAIN_AMOUNT',
        value
    }
}



const singleDiceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const pickTerrainIndex = () => {
    return Math.floor(Math.random() * 4);
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