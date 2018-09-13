import React from 'react';
import { View, Text } from 'react-native';

const Realm = require('realm');


class AddTerrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        Realm.open({
            schema: [{ name: 'Dog', properties: { name: 'string' } }]
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', { name: 'Rex' });
            });
            this.setState({ realm });
        });
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...'
        return (
            <View>
                <Text>
                    {info}
                </Text>
            </View>
        )
    }
}

export default AddTerrain;