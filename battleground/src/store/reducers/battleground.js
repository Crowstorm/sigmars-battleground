const initialState = {
    terrainVisibility: true,
    sceneryVisibility: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TERRAIN': {
            return{
                // ...state,
                // places: state.places.concat({
                //     key: Math.random(),
                //     name: action.placeName,
                //     image: {
                //        // uri: require('http://www.thelandofshadow.com/wp-content/uploads/2013/04/mordor_by_edli-d2yrha5-1024x621.jpg') //czyli trza dodac require inaczej na device nie widac 
                //         uri: 'http://www.thelandofshadow.com/wp-content/uploads/2013/04/mordor_by_edli-d2yrha5-1024x621.jpg' //czyli trza dodac require inaczej na device nie widac 
                //     }
                // })
            }
        }
        case 'TOGGLE_SCENERY': {
            return{
                // ...state,
                // places: state.places.concat({
                //     key: Math.random(),
                //     name: action.placeName,
                //     image: {
                //        // uri: require('http://www.thelandofshadow.com/wp-content/uploads/2013/04/mordor_by_edli-d2yrha5-1024x621.jpg') //czyli trza dodac require inaczej na device nie widac 
                //         uri: 'http://www.thelandofshadow.com/wp-content/uploads/2013/04/mordor_by_edli-d2yrha5-1024x621.jpg' //czyli trza dodac require inaczej na device nie widac 
                //     }
                // })
            }
        }
   
        default:
            return state;
    }
};

export default reducer;