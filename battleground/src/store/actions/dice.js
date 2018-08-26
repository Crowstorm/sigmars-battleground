export const setNumberOfDice = (value) =>{
    return{
        type: 'SET_NUMBER_OF_DICE',
        value
    }
}

export const rollTheDice = () =>{
    return function (dispatch, getState) {
        let numberOfDice = getState().dice.numberOfDice;
        let rolledDice = [];
        for(let i = 0; i < numberOfDice; i++){
            rolledDice.push(singleDiceRoll());
        };
        dispatch({
            type: 'ROLLED_DICE',
            rolledDice
        })
    }
}

const singleDiceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}