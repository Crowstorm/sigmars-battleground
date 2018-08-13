const initialState = {
    terrainVisibility: true,
    sceneryVisibility: true,
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
   
        default:
            return state;
    }
};

export default reducer;