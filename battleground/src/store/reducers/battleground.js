const initialState = {
    terrainIndex: [0, 1, 2, 3],
    squareIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    terrainVisibility: true,
    sceneryVisibility: true,
    pickedSquares: [

    ],
    numberOfTerrains:[

    ],
    indexHelper: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TERRAIN': {
            return{
                ...state,
                terrainVisibility: !state.terrainVisibility
            }
        }
        case 'TOGGLE_SCENERY': {
            return{
                 ...state,
                 sceneryVisibility: !state.sceneryVisibility
            }
        }
        case 'PICKED_SQUARES':{
            return{
                ...state,
                pickedSquares: action.value
            }
        }
        case 'TERRAIN_AMOUNT':{
            return{
                ...state,
                numberOfTerrains: action.value
            }
        }
        case 'INCREMENT_INDEX_HELPER':{
            return{
                ...state,
                indexHelper: state.indexHelper+1
            }
        }
        case 'ZERO_INDEX_HELPER':{
            return{
                ...state,
                indexHelper: 0
            }
        }
        case 'SET_TERRAIN_FLAG':{
            let pickedSquaresCopy = state.pickedSquares;
            pickedSquaresCopy[action.index1][action.index2][3] = true;
            console.log(pickedSquaresCopy);
            // return{
            //     ...state,
            //     pickedSquares: pickedSquaresCopy
            // }
        }
   
        default:
            return state;
    }
};

export default reducer;