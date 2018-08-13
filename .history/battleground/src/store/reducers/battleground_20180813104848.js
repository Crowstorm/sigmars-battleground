const initialState = {
    terrainVisibility: true,
    sceneryVisibility: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TERRAIN': {
            return{
                ...state,
                terrainVisibility: !terrainVisibility
            }
        }
        case 'TOGGLE_SCENERY': {
            return{
                 ...state,

            }
        }
   
        default:
            return state;
    }
};

export default reducer;