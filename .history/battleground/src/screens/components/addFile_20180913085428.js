import React from 'react';
import { View, Text, Button, Image, AsyncStorage } from 'react-native';



class AddFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }
    render() {

        return (
            <View>
                <Text>Add PDF</Text>


            </View>
        )
    }
}

export default AddFile;