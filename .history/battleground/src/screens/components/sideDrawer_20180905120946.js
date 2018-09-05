import React from 'react';
import {View, Text, Button, Dimensions, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import ContactForm from '../contact';
import {toggleContactForm, sendEmail} from '../../store/actions/menu';


class SideDrawer extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Elo</Text>
            <TouchableOpacity>
                <View style={styleMedia.buttonStyle}>
                    <Image style={styleMedia.buttonImage}/>
                    <Text style={styles.buttonText}>Contact Form</Text>
                </View>
            </TouchableOpacity>
            <Button title="Elo" onPress={() => this.props.toggleContactForm()}/>
            <ContactForm {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.7,
        flex: 1,
        backgroundColor: "white",
        paddingTop: "5%"
    },
    buttonText:{
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonImage:{
        height: 50
    },
    buttonStyle:{
        borderWidth: 1,
        borderColor: "#ccc"
    }
})

const mapDispatchToProps = dispatch => {
    return {
       toggleContactForm: () => dispatch(toggleContactForm()),
       sendEmail: (email, topic, text) => dispatch(sendEmail(email, topic, text)),
    }
}

function mapStateToProps(store) {
    return {
        menu: store.menu,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

//export default SideDrawer;