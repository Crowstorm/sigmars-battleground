import React from 'react';
import { View, Text } from 'react-native';

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
            <View>
                <Text>Elo</Text>
            </View>
        )
    }
}

export default WarscrollScreen;