import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
                        <TouchableOpacity onPress={() => this.props.toggleContactForm()}>
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
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5%",
        flexDirection: "column",
    },
    aboutText:{
        flex: 1
    },
    

})

export default About;