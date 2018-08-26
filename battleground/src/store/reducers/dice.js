const initialState = {
    numberOfDice: 0,
    rolledDice: [],
    6: 0,
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_DICE': {
            return {
                ...state,
                numberOfDice: action.value
            }
        }
        case 'ROLLED_DICE': {
            return {
                ...state,
                rolledDice: action.rolledDice
            }
        }
        default:
            return state;
    }
};

export default reducer;