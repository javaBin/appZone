import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class SessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'List alle foredrag',
    };
    render() {
        return (
            <View>
                <Text>Her kommer alle foredrag</Text>
            </View>
        );
    }
}

export default SessionsScreen