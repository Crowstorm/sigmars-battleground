import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Button, Image, Modal, TextInput, StyleSheet } from 'react-native';
import email from 'react-native-email';
import LinearGradient from 'react-native-linear-gradient';


import Cancel from '../assets/buttons/cancel.png'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            topic: null,
            text: null
        };
    }

    // handleSendEmail = () => {
    //     const to = ['crowstormofficial@gmail.com']; // string or array of email addresses
    //     email(to, {
    //         // Optional additional arguments
    //         subject: this.state.topic,
    //         body: this.state.text
    //     }).catch(console.error)
    // }

    handleSendEmail = () => {
        const email = this.state.email;
        const topic = this.state.topic;
        const text = this.state.text;
        //action
        this.props.sendEmail(email, topic, text);
    }
    render() {

        return (
            <Modal
                visible={this.props.menu.contactFormOpen}
                onRequestClose={() => { }}
                animationType="slide">

                <View style={styles.container}>
                    <TextInput style={styles.textInput} placeholder="Your email" onChangeText={(email) => this.setState({ email })} />
                    <TextInput style={styles.textInput} placeholder="Topic" onChangeText={(topic) => this.setState({ topic })} />
                    <TextInput style={[styles.textInput, { height: 100 }]} placeholder="Text" onChangeText={(text) => this.setState({ text })} />

                    <TouchableOpacity style={styles.sendMailButton} onPress={this.handleSendMail} >
                        <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                            <View>
                                <Text style={styles.buttonText}>Send Mail</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.toggleContactForm()}>
                        <Image source={Cancel} style={styles.button} />
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: "center",
        paddingTop: "5%",
        flexDirection: "column",
        position: 'relative',
    },
    formContainer: {
        flex: 1
    },
    buttonContainer: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        backgroundColor: "#192f6a",
    },
    button: {
        height: 40,
        width: 40
    },
    text: {
        // color: "#AB7A30",
        // textShadowOffset: { width: 1, height: 1 },
        // textShadowColor: "black",
        // textShadowRadius: 1,
        paddingLeft: "5%",
        paddingRight: "5%",
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "center",
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: "red"
    },
    sendMailButton: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center",
        width: "50%"
    },
    buttonText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight: "bold",
        fontSize: 16,
        padding: 10
    },
})

export default ContactForm;