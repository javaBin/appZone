import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class FeedbackScreen extends React.Component {
    static navigationOptions = {
        title: 'Tell us that you love us!',
    };
    render() {
        return (
            <View>
                <Text>Her kan du gi feedback</Text>
            </View>
        );
    }
}

export default FeedbackScreen