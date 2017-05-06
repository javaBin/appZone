import React from 'react';
import { Text, View } from 'react-native';
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
      </View>
    )
  }
} 
// export default connect(
//   (state) => ({sessions: state.sessions})
// )(SessionScreen)
