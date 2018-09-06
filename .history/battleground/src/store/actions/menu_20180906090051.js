export const toggleContactForm = () => {
    return {
        type: 'TOGGLE_CONTACT_FORM'
    }
}
export const toggleAbout = () => {
    return {
        type: 'TOGGLE_ABOUT'
    }
}

export const sendEmail = (_email, _topic, _text) => {
    return dispatch => {
        console.log('eloszka');
        const emailData = {
            email: _email,
            topic: _topic,
            text: _text
        }
        console.log({emailData});
        fetch("https://aos-battleground.firebaseio.com/email.json", {
            method: "POST",
            body: JSON.stringify(emailData)
        })
            .catch(err => console.log(err))
            .then(res => { res.json() })
            .then(parsedRes => {
                console.log(parsedRes);
            })
    }
}