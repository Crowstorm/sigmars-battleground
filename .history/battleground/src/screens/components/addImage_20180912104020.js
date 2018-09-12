import React from 'react';
import {View, Text, Button, Image, AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

class AddImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: 'nic'
        }
    }
    handleFilePick = () =>{
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.images()],
          },(error,res) => {
            // Android
            this.setState({
                file: res
            })
            console.log(
               res.uri,
               res.type, // mime type
               res.fileName,
               res.fileSize
            );
          });
      
    }
    render(){
        console.log(this.state.file)
        return(
            <View>
                <Text>Add image</Text>
                <Button title="Pick a file" onPress={() => this.handleFilePick()} />
            </View>
        )
    }
}

export default AddImage;