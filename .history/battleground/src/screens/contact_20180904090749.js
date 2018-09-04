import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Button, Image, Modal, TextInput, StyleSheet } from 'react-native';
import email from 'react-native-email';

import Cancel from '../assets/buttons/cancel.png'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             email:  null,
             topic: null,
             text: null
             };
    }

    render() {
        return (
            <Modal
                visible={this.props.menu.contactFormOpen}
                onRequestClose={() => { }}
                animationType="slide">

                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Your email" onChangeText={(email) => this.setState({email})}/>
                    <TextInput style={styles.textInput} placeholder="Topic" onChangeText={(topic) => this.setState({topic})}/>
                    <TextInput style={[styles.textInput, {height: 100}]} placeholder="Text" onChangeText={(text) => this.setState({text})}/>
                    <Text>{this.state.text}</Text>
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
        //backgroundColor: "#1b2936",
        borderWidth: 1,
        alignItems: "center",
        paddingTop: "5%",
        flexDirection: "column",
        position: 'relative',
        //justifyContent: "center"

    },
    formContainer: {
        flex: 1
    },
    buttonContainer: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        //  borderWidth: 1,
        // borderColor: "pink",
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
    textInput:{
        height: 40,
        borderWidth: 1,
        borderColor: "red"
    },
})

export default ContactForm;