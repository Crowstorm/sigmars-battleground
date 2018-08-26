import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { setNumberOfDice, rollTheDice, rerollDice } from '../store/actions/dice';


class DiceScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'black'
    };

    handleNumberOfDice = (value) => {
        let number = parseInt(value);
        this.props.setNumberOfDice(number);
    }

    handleRollDice = () => {
        // console.log('elo?')
        this.props.rollTheDice();
    }

    handleReroll = () =>{
        this.props.rerollDice();
    }

    render() {
        console.log(this.props)
        let { one, two, three, four, five, six } = this.props.dice;
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text> Number of dice</Text>
                <TextInput style={styles.textInput}
                    keyboardType='numeric'
                    value={this.props.dice.numberOfDice}
                    onChangeText={(value) => this.handleNumberOfDice(value)}
                />
                <View style={styles.diceResult}>
                    <Text>Number of 6s: {six}</Text>
                    <Text>Number of 5s and above:{six + five}</Text>
                    <Text>Number of 4s and above:{six + five + four}</Text>
                    <Text>Number of 3s and above:{six + five + four + three}</Text>
                    <Text>Number of 2s and above:{six + five + four + three + two}</Text>
                    <Text>Number of 1s:{one}</Text>

                    <TouchableOpacity style={styles.rollButton} onPress={this.handleReroll} >
                        <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                            <View>
                                <Text style={styles.rollButtonText}>Reroll</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.rollButton} onPress={this.handleRollDice} >
                    <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                        <View>
                            <Text style={styles.rollButtonText}>Roll The Dice</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
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
        paddingTop: "10%",
        flexDirection: "column",
        // position: 'relative',
        // justifyContent: "center"
    },
    textInput: {
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1
    },
    diceResult: {
        height: "50%",
        borderWidth: 1,
        borderColor: 'pink',
        // alignItems: "center",
        justifyContent: "center"

    },
    rollButton: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "10%",
        //alignSelf: 'flex-end'
        // position: 'absolute',
        // bottom: "50%",
        // left: "50%",
    },
    rollButtonText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight: "bold",
        fontSize: 16,
        padding: 10
    }

})

const mapDispatchToProps = dispatch => {
    return {
        setNumberOfDice: (value) => dispatch(setNumberOfDice(value)),
        rollTheDice: () => dispatch(rollTheDice()),
        rerollDice: () =>dispatch(rerollDice()),
    }
}

function mapStateToProps(store) {
    return {
        dice: store.dice,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceScreen);