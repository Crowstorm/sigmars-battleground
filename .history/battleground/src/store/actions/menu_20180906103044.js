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
        console.log({ emailData });
        // fetch("http://localhost:5000/api/sendEmail", {
        //     method: "POST",
        //     body: JSON.stringify(emailData)
        // })
        //     .catch(err => console.log(err))


        fetch('/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
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