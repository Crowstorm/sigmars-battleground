const initialState = {
    contactFormOpen: false,
    aboutOpen: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CONTACT_FORM':{
            return{
                ...state,
                contactFormOpen: !state.contactFormOpen
            }
        }
        case 'TOGGLE_ABOUT':{
            return{
                ...state,
                aboutOpen: !state.aboutOpen
            }
        }
        default:
            return state;
    }
};

export default reducer;