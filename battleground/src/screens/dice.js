import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {setNumberOfDice} from '../store/actions/dice';


class DiceScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'black'
    };

    handleNumberOfDice = (value) =>{
        let number = parseInt(value);
        this.props.setNumberOfDice(number);
    }

    render() {
        console.log(this.props)
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text> Number of dice</Text>
                <TextInput style={styles.textInput}  
                keyboardType='numeric'
                value={this.props.dice.numberOfDice.toString()}
                onChangeText={(value) =>this.handleNumberOfDice(value)}
                /> 
            </LinearGradient>
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
        position: 'relative'
        //justifyContent: "center"
    },
    textInput:{
        height: 40, 
        // borderColor: 'gray',
        // borderWidth: 1
    }

})

const mapDispatchToProps = dispatch => {
    return {
        setNumberOfDice: (value) => dispatch(setNumberOfDice(value)),
    }
}

function mapStateToProps(store) {
    return {
        dice: store.dice,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceScreen);