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
        alignItem: "center",
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