import React from 'react';
import { View, Button, TouchableHighlight, Text } from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

class FeedbackScoreBtn extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onButtonPress() {
        this.props.onScoreButtonPress(this.props.score);
    }

    style(selected){
        if(selected) {
            return {height: 40,
                    width: 40, backgroundColor: '#3d3d3d', borderWidth: 2,
                    borderColor: 'red',borderRadius: 10}
        } else {
            return {
                        height: 40,
                        width: 40,
                        backgroundColor: 'red'
                    }
        }
    }

    render() {
        console.log('this.props.selected', this.props.selected)
        return (
            <TouchableHighlight
                onPress={this.onButtonPress.bind(this)}
                style={this.style(this.props.selected)}>
                <Text style={{color: '#fff', padding: 10}}>{this.props.score}</Text>
            </TouchableHighlight>
        )
    }
}
export default FeedbackScoreBtn;