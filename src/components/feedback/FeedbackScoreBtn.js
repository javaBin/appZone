import React from 'react';
import { View, Button } from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

class FeedbackScoreBtn extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onButtonPress() {
        this.props.onScoreButtonPress(this.props.score);
    }

    render() {
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                title={this.props.score}
                style={{
                    height: 40,
                    width: 40
                }}/>
        )
    }
}
export default FeedbackScoreBtn;