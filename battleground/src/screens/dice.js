import React from 'react';
import _ from 'lodash';
import { View, Text, TextInput, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { setNumberOfDice, rollTheDice, rerollDice } from '../store/actions/dice';

import dice1 from '../assets/dice/inverted-dice-1.png';
import dice2 from '../assets/dice/inverted-dice-2.png';
import dice3 from '../assets/dice/inverted-dice-3.png';
import dice4 from '../assets/dice/inverted-dice-4.png';
import dice5 from '../assets/dice/inverted-dice-5.png';
import dice6 from '../assets/dice/inverted-dice-6.png';


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

    handleReroll = (value) => {
        this.props.rerollDice(value);
    }

    renderDiceReroll = () => {
        const dice = [
            { 'image': dice1, 'number': 1 },
            { 'image': dice2, 'number': 2 },
            { 'image': dice3, 'number': 3 },
            { 'image': dice4, 'number': 4 },
            { 'image': dice5, 'number': 5 },
            { 'image': dice6, 'number': 6 }
        ];

        return _.map(dice, (d) => {
            return (
                <View key={d.number}>
                    <TouchableOpacity style={styles.rollButton} onPress={() => this.handleReroll(d.number)} >
                            <View style={styles.rerollDice}>
                                <Image source={d.image} style={styles.rerollDice} />
                            </View>
                    </TouchableOpacity>
                </View>
            )
        });
    }

    render() {
        console.log(this.props)
        let { one, two, three, four, five, six } = this.props.dice;

        let renderDiceReroll = this.renderDiceReroll();
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
                </View>

                <View style={styles.rerollView}>
                    {renderDiceReroll}
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
    },
    rollButtonText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight: "bold",
        fontSize: 16,
        padding: 10
    },
    rerollView:{
        flexDirection: "row"
    },
    rerollDice:{
        height: 50,
        width: 50
    }

})

const mapDispatchToProps = dispatch => {
    return {
        setNumberOfDice: (value) => dispatch(setNumberOfDice(value)),
        rollTheDice: () => dispatch(rollTheDice()),
        rerollDice: (value) => dispatch(rerollDice(value)),
    }
}

function mapStateToProps(store) {
    return {
        dice: store.dice,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceScreen);