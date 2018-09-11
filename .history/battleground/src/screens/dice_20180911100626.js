import React from 'react';
import _ from 'lodash';
import { View, Text, TextInput, TouchableOpacity, Button, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { setNumberOfDice, rollTheDice, rerollDice } from '../store/actions/dice';

import dice1 from '../assets/dice/inverted-dice-1.png';
import dice2 from '../assets/dice/inverted-dice-2.png';
import dice3 from '../assets/dice/inverted-dice-3.png';
import dice4 from '../assets/dice/inverted-dice-4.png';
import dice5 from '../assets/dice/inverted-dice-5.png';
import Roll from '../assets/buttons/rolling.png';

class DiceScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'black',
        navBarButtonColor: "#AB7A30"
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.state={
            diceToRoll: null,
        }
    }

    onNavigatorEvent = (e) => {
        if (e.type === 'NavBarButtonPress') {
            if (e.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                });
            }
        }
    }

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
            { 'image': dice5, 'number': 5 },
            { 'image': dice4, 'number': 4 },
            { 'image': dice3, 'number': 3 },
            { 'image': dice2, 'number': 2 },
            { 'image': dice1, 'number': 1 },
            // { 'image': dice6, 'number': 6 }
        ];
        if (this.props.dice.isRolled) {
            return _.map(dice, (d) => {
                return (
                    // <View key={d.number}>
                    <TouchableOpacity key={d.number} style={styles.rerollDice} onPress={() => this.handleReroll(d.number)} >
                        {/* <View style={styles.rerollDice}> */}
                        <Image source={d.image} style={styles.rerollDice} />
                        {/* </View> */}
                    </TouchableOpacity>
                    // </View>
                )
            });
        }
    }

    handleRenderRolledContent = () => {
        let { one, two, three, four, five, six } = this.props.dice;

        if (this.props.dice.isRolled) {
            return (
                <View style={styles.diceResult}>
                {/* <Image source={Roll} style={styles.smallRollButton} /> */}
                    <Text style={styles.diceResultText}>Number of 6s: <Text style={styles.diceResultTextGenerated}>  {six}  </Text> <Image source={Roll} style={styles.smallRollButton} />  </Text>
                    <Text style={styles.diceResultText}>Number of 5s and above:<Text style={styles.diceResultTextGenerated}>  {six + five}  </Text> <Image source={Roll} style={styles.smallRollButton} /> </Text>
                    <Text style={styles.diceResultText}>Number of 4s and above:<Text style={styles.diceResultTextGenerated}>  {six + five + four}  </Text></Text>
                    <Text style={styles.diceResultText}>Number of 3s and above:<Text style={styles.diceResultTextGenerated}>  {six + five + four + three}  </Text></Text>
                    <Text style={styles.diceResultText}>Number of 2s and above:<Text style={styles.diceResultTextGenerated}>  {six + five + four + three + two}  </Text></Text>
                    <Text style={styles.diceResultText}>Number of 1s:<Text style={styles.diceResultTextGenerated}>  {one}  </Text></Text>
                </View>
            )
        }
    }

    render() {
        console.log(this.props)

        let renderDiceResult = this.handleRenderRolledContent();
        let renderDiceReroll = this.renderDiceReroll();
        let diceButtonText = (this.props.dice.isRolled) ? 'Reroll All Dice' : 'Roll The Dice'
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <View>
                    <Text style={styles.diceResultText}> Number of dice</Text>
                    <TextInput style={styles.textInput}
                        keyboardType='numeric'
                        value={this.props.dice.numberOfDice.toString()}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.handleNumberOfDice(value)}
                    />
                </View>
                
                {renderDiceResult}

                <View style={styles.rerollView}>
                    {renderDiceReroll}
                </View>
                <TouchableOpacity style={[styles.prerollRollButton, (this.props.dice.isRolled) ? styles.rollButton : styles.prerollRollButton]} onPress={this.handleRollDice} >
                    <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                        <View>
                            <Text style={styles.rollButtonText}>{diceButtonText}</Text>
                            <Image source={Roll} style={{height: 50, width: 50}} /> 
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
        borderWidth: 1,
        alignItems: "center",
        paddingTop: "5%",
        flexDirection: "column",
    },
    textInput: {
        height: 40,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#AB7A30",
        marginTop: "1%"
    },
    diceResult: {
        height: "50%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    diceResultText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
    },
    diceResultTextGenerated: {
        fontWeight: "bold",
        fontSize: 16
    },
    rollButton: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "5%",
    },
    prerollRollButton: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "35%",
        flexDirection: "column"
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
    rerollView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    rerollDice: {
        height: 50,
        width: 50
    },
    smallRollButton:{
        height: 30,
        width: 30
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