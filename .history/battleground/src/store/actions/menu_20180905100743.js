export const toggleContactForm = () => {
    return {
        type: 'TOGGLE_CONTACT_FORM'
    }
}

export const sendEmail = (email, topic, text) =>{
    return dispatch =>{
        console.log('eloszka');
        fetch("https://aos-battleground.firebaseio.com/email.json", {
            method: "POST",
            body: 
        })
    }
}