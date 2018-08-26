const initialState = {
    numberOfDice: 0,
    rolledDice: [],
    six: 0,
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0
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
                rolledDice: action.rolledDice,
                one: action.one,
                two: action.two,
                three: action.three,
                four: action.four,
                five: action.five,
                six: action.six,
            }
        }
        default:
            return state;
    }
};

export default reducer;