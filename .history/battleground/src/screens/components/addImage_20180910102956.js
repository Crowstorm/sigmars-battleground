import React from 'react';
import {View, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class AddImage extends React.Component{
    state={
        pickedImage: null,
    }

    pickImageHandler = () =>{
        ImagePicker.showImagePicker({title: "Pick an image"}, res =>{
            if(res.didCancel){

            } else if(res.error){
                console.log('error', res.error);
            } else {
                this.setState({
                    pickedImage: {uri: res.uri}
                })
            }
        });
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