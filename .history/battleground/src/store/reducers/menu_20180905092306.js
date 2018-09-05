const initialState = {
    contactFormOpen: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CONTACT_FORM':{
            return{
                ...state,
                contactFormOpen: !state.contactFormOpen
            }
        }
        default:
            return state;
    }
};

export default reducer;