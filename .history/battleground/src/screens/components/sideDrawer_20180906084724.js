import React from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import ContactForm from '../contact';
import About from '../about';
import { toggleContactForm } from '../../store/actions/menu';

import Mailbox from '../../assets/buttons/mailbox.png';


class SideDrawer extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={styles.container}>
                <TouchableOpacity onPress={() => this.props.toggleContactForm()}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Contact Form</Text>
                        <Image style={styles.buttonImage} source={Mailbox} />
                    </View>
                </TouchableOpacity>
                <ContactForm {...this.props} />
                <About {...this.props} />
            </LinearGradient>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.7,
        flex: 1,
        paddingTop: "5%"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#AB7A30',
        paddingLeft: "10%"
    },
    buttonImage: {
        height: 50,
        width: 50,
        marginRight: "10%"
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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