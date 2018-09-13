import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AddFile from './components/addFile';

class WarscrollScreen extends React.Component {
    static navigatorStyle = {
        navBarTextColor: '#AB7A30',
        navBarTranslucent: true,
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'black',
        navBarButtonColor: "#AB7A30"
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
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

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text>Elo</Text>
                <AddFile />
                <Text>List placeholder</Text>
                <Text>Add list button placeholder</Text>
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
        position: 'relative'
    },
})

export default WarscrollScreen;