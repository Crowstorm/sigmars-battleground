import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends React.Component{
    render(){
        return(
            <View style={styles.container}><Text>Elo</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.7,
        flex: 1,
        backgroundColor: "white",
        paddingTop: "5%"
    }
})

export default SideDrawer;