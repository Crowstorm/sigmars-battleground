import React from 'react';
import { View, Text, Button, Image, AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import PDFView from 'react-native-view-pdf';


class AddFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
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

    renderPDF = () => {
            return (
                // <View style={{ height: 300, width: 200, borderWidth: 1, borderColor: "red" }}>
    
                    <PDFView
                        style={{ flex: 1 }}
                        onError={(error) => console.log('onError', error)}
                        onLoad={() => console.log('PDF rendered from file')}
                        resource={this.state.file.fileName}
                        resourceType="file"
                    />
                )
    }
    render() {
        console.log(this.state.file, 'PLICZEK')

        let renderPDF = (this.state.file) ? this.renderPDF() : <Text>'</Text>;
        return (
            <View>
                <Text>Add PDF</Text>
                <Button title="Pick a file" onPress={() => this.handleFilePick()} />

                {renderPDF}

            </View>
        )
    }
}

export default AddFile;