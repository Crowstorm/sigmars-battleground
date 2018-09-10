import React from 'react';
import {View, Text} from 'react-native';

class AddImage extends React.Component{
    state={
        pickedImage: null,
    }
    render(){
        return(
            <View>
                <Text>Add image</Text>
            </View>
        )
    }
}

export default AddImage;