import React from 'react';
import { StyleSheet, AppRegistry, View, Text, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux';

import * as session from '../../actions/session';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class SessionScreen extends React.Component {
  static propTypes = {

  }; 

  constructor(props) {
    super(props);    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = {
      allSessions: []
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {

  }
  render() {
    let output = [];

    return (
      <View>
        <Text>Sessions will be here...</Text>
      </View>
    )
  }
}

//const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 


const mapStateToProps = (state) => { 
  return {  
    sessionsData: state.sessions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSessions : () => {

    }
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionScreen);

