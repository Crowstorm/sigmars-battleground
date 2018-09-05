export const toggleContactForm = () => {
    return {
        type: 'TOGGLE_CONTACT_FORM'
    }
}

export const sendEmail = (_email, _topic, _text) =>{
    return dispatch =>{
        console.log('eloszka');
        const emailData = {
            email: _email,
            topic: _topic,
            text: _text
        }
        fetch("https://aos-battleground.firebaseio.com/email.json", {
            method: "POST",
            body: JSON.stringify(emailData)
        })
    }
}