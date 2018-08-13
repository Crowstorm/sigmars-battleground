const initialState = {
    terrainVisibility: true,
    sceneryVisibility: true,
    squareContent: [

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
   
        default:
            return state;
    }
};

export default reducer;