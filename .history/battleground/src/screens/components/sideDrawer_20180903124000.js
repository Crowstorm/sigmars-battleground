import React from 'react';
import {View, Text, Dimensions} from 'react-native';

class SideDrawer extends React.Component{
    render(){
        return(
            <View style={{width: Dimensions.get('window').width * 0.7}}><Text>Elo</Text></View>
        )
    }
}

export default SideDrawer;