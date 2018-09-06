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
        fetch("http://localhost:5000/api/sendEmail", {
            method: "POST",
            body: JSON.stringify(emailData)
        })
            .catch(err => console.log(err))
            .then(res => { return res.json() })
            .then(parsedRes => {
                console.log(parsedRes);
            })
    }
}