import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text } from 'react-native'
import style from '../../common/style'

class FeedbackScoreBtn extends React.Component  {
    static propTypes = {
        selected: PropTypes.bool,
        score: PropTypes.number,
        onScoreButtonPress: PropTypes.func,
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    onButtonPress() {
        this.props.onScoreButtonPress(this.props.score)
    }

    style(selected){
        if(selected) {
            return {
                    height: 30,
                    width: 50, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: style.colors.backgroundSecondary, 
                    borderWidth: 2,
                    borderColor: '#ddd',
                    borderRadius: 40,
                    marginRight: 10,
                    marginLeft: 10
                    }
        } else {
            return {
                    height: 30,
                    width: 50,
                    borderWidth: 2, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                    marginLeft: 10
                    }
        }
    }

    render() {
        return (
            <TouchableHighlight
                onPress={this.onButtonPress.bind(this)}
                style={this.style(this.props.selected)}>
                <Text style={{ color: style.colors.color2, fontSize: 20 }}>{ this.props.score }</Text>
            </TouchableHighlight>
        )
    }
}

export default FeedbackScoreBtn