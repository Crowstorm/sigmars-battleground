import React from 'react';
import {View, Text, Button, Dimensions, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import ContactForm from '../contact';
import {toggleContactForm} from '../../store/actions/menu';

import Mailbox from '../../assets/buttons/mailbox.png';


class SideDrawer extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Elo</Text>
            <TouchableOpacity onPress={() => this.props.toggleContactForm()}>
                <View style={styles.buttonStyle}>
                    <Image style={styles.buttonImage} source={Mailbox}/>
                    <Text style={styles.buttonText}>Contact Form</Text>
                </View>
            </TouchableOpacity>
            {/* <Button title="Elo" /> */}
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
        height: 50,
        width: 50
    },
    buttonStyle:{
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "black"
    }
})

const mapDispatchToProps = dispatch => {
    return {
       toggleContactForm: () => dispatch(toggleContactForm()),
    }
}

function mapStateToProps(store) {
    return {
        menu: store.menu,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

//export default SideDrawer;