import React from 'react';
import {View, Text, Button, Image, AsyncStorage} from 'react-native';
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
                this.saveData(res.uri);
            }
        });
    }

    saveData = (uri) =>{
        AsyncStorage.setItem('image', uri);
    }

    getImage = async () =>{
        try{
            let image = await AsyncStorage.getItem('image');
            return image;
        }
        catch(error){
            alert(error);
        }
    }

    render(){
        let imageSource = this.getImage;
        return(
            <View>
                <Text>Add image</Text>
                <Button title="Pick Image" onPress={this.pickImageHandler}/>
                <Image source={imageSource} style={{height: 200, width: 200}}/>
            </View>
        )
    }
}

export default AddImage;