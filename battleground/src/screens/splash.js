import React from 'react';

import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import startMainTabs from './startMainTabs';

class SplashScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
    };
    enterAppHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text>
                    Thank you for using <Text>AoS Battleground</Text>.{"\n"}
                    Please keep in mind that app is in it's early stages.{"\n"}
                    If you see any bug or error, or want to ask for a feature that would benefit you, please do contact me at EMAIL or use contact form built within the app.{"\n"}
                    I hope you'll enjoy using it.
                </Text>
                <TouchableOpacity
                    onPress={() => { this.enterAppHandler() }}
                    style={styles.button}>
                    <LinearGradient colors={['#192f6a', '#3b5998', '#192f6a']} style={{ borderRadius: 10 }}>
                        <View>
                            <Text style={styles.buttonText}>Join The Battle</Text>
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
        paddingTop: "5%",
        flexDirection: "column",
        justifyContent: "center"
    },
    button: {
        borderColor: "#AB7A30",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
        width: "50%",
    },
    buttonText: {
        color: "#AB7A30",
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight: "bold",
        fontSize: 16,
        padding: 10,
        textAlign: "center"
    },
})

export default SplashScreen;