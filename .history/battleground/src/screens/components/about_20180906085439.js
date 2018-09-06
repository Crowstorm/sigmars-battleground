import React from 'react';
import { View, Text } from 'react-native';

class About extends React.Component {
    render() {
        return (
            <Modal
                visible={this.props.menu.aboutOpen}
                onRequestClose={() => { }}
                animationType="slide">
                <View>
                    <Text>About</Text>
                    <Text>Icons: https://game-icons.net/</Text>
                </View>
            </Modal>
        )
    }
}

export default About;