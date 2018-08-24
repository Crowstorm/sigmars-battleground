const initialState = {
    numberOfDice: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_DICE': {
            return {
                ...state,
                numberOfDice: action.value
            }
        }
        default:
            return state;
    }
};

export default reducer;