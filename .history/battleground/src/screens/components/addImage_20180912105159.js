import React from 'react';
import {View, Text, Button, Image, AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

class AddFile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: 'nic'
        }
    }
    handleFilePick = () =>{
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.pdf()],
          },(error,res) => {
            // Android
            this.setState({
                file: res
            })
          });
      
    }
    render(){
        console.log(this.state.file)
        return(
            <View>
                <Text>Add PDF</Text>
                <Button title="Pick a file" onPress={() => this.handleFilePick()} />
            </View>
        )
    }
}

export default AddFile;