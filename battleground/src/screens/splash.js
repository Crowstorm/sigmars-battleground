import React from 'react';

import { View, Text, Button } from 'react-native';

import startMainTabs from './startMainTabs';

class SplashScreen extends React.Component {

    enterAppHandler = () =>{
        startMainTabs();
    }

    render() {
        console.log('elo')
        return (
            <View>
                <Text> Dziala? </Text>
                <Button title="Start" onPress={this.enterAppHandler}/>
            </View>
        )
    }
}

export default SplashScreen;