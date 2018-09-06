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
        const emailData = {
            email: _email,
            topic: _topic,
            text: _text
        }

        fetch('http://10.1.1.122:5000/api/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: _email,
                topic: _topic,
                text: _text
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('here is the response: ', res);
            })
            .catch((err) => {
                console.error('here is the error: ', err);
            })

    }
}