import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Cancel from '../../assets/buttons/cancel.png'


class About extends React.Component {
    render() {
        return (
            <Modal
                visible={this.props.menu.aboutOpen}
                onRequestClose={() => { }}
                animationType="slide">
                <View style={styles.container}>
                    <View style={styles.aboutText}>
                        <Text>About</Text>
                        <Text>AoS Battleground was created to speed up the process of setting up the Age of Sigmar playing field. Quickly generate your terrain and scenery and don't waste time for rolling the
                            dice on your own.
                            Second module - dice rolling - might come in handy when you have to roll a lot of dice at once. App rolls and counts everything for you, leaving you more time to actually play the game.
                        </Text>
                        <Text>Programmer: Mateusz Mazur (Big Paws)</Text>
                        <Text>Icons: https://game-icons.net/</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.props.toggleAbout()}>
                            <Image source={Cancel} style={styles.button} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aboutText:{
        flex: 1,
          paddingLeft: "5%",
        paddingRight: "5%",
        textAlign: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        backgroundColor: "#192f6a",
    },
    button: {
        height: 40,
        width: 40
    },

})

export default About;