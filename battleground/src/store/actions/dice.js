export const setNumberOfDice = (value) =>{
    return{
        type: 'SET_NUMBER_OF_DICE',
        value
    }
}

export const rollTheDice = () =>{
    return function (dispatch, getState) {
        let numberOfDice = getState().dice.numberOfDice;
        console.log(numberOfDice);
    }

}