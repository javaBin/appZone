import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

export default class SessionScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //     sessions: navigation.state.params,
  // })
  render() {
    // const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Her er den ene taben</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: 'yellow',
            marginTop: 20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
// export default connect(
//   (state) => ({sessions: state.sessions})
// )(SessionScreen)
