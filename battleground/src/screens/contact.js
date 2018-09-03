import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Button, Image, Modal, StyleSheet } from 'react-native';
import email from 'react-native-email';

class ContactForm extends React.Component{
    render(){
        return(
            <Modal
            visible={this.props.menu.contactFormOpen}
            onRequestClose={()=>{}}
            animationType="slide">
               <View style={styles.buttonContainer}>
                   {terrainButton}
                   {sceneryButton}
               </View>
               <ScrollView>
                   {legend}
               </ScrollView>

               <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => this.props.toggleMapLegend()}>
                       <Image source={Cancel} style={styles.button} />
                   </TouchableOpacity>
               </View>
           </Modal>
        )
    }
}

export default ContactForm;