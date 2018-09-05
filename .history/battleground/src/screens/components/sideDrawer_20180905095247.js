import React from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import ContactForm from '../contact';
import {toggleContactForm, sendEmail} from '../../store/actions/menu';


class SideDrawer extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Elo</Text>
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