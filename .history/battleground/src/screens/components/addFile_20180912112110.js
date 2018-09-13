import React from 'react';
import { View, Text, Button, Image, AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import PDFView from 'react-native-view-pdf';


class AddFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'nic'
        }
    }
    handleFilePick = () => {
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.pdf()],
        }, (error, res) => {
            // Android
            this.setState({
                file: res
            })
        });

    }
    render() {
        console.log(this.state.file, 'PLICZEK')
        return (
            <View>
                <Text>Add PDF</Text>
                <Button title="Pick a file" onPress={() => this.handleFilePick()} />
                <View style={{ height: 300, width: 200, borderWidth: 1, borderColor: "red" }}>
                    <PDFView
                        style={{ flex: 1 }}
                        onError={(error) => console.log('onError', error)}
                        onLoad={() => console.log('PDF rendered from file')}
                        resource={this.state.file.uri}
                        resourceType="file"
                    />
                </View>
            </View>
        )
    }
}

export default AddFile;