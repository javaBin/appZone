import React from 'react';
import { Text, View } from 'react-native'; 
import { connect } from 'react-redux';

export default class HomeScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //     sessions: navigation.state.params,
  // })
  render() {
    // const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Hjemme!</Text>
        </View>
    )
  }
}
// export default connect(
//   (state) => ({sessions: state.sessions})
// )(HomeScreen)