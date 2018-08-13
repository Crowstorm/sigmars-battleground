const initialState = {
    terrainIndex: [0, 1, 2, 3],
    squareIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    terrainVisibility: true,
    sceneryVisibility: true,
    squareContent: [

    ],
    numberOfTerrains:[

    ]
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
                squareContent: [...state.squareContent, action.array]
            }
        }
        case 'TERRAIN_AMOUNT':{
            console.log('?')
            return{
                ...state,
                numberOfTerrains: state.numberOfTerrains.concat(action.value)
            }
        }
   
        default:
            return state;
    }
};

export default reducer;