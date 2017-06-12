import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ListView, 
  Button,
  TouchableOpacity 
} from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SessionDetail from './SessionDetail';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../common/style';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  SessionTitle: {
    fontSize: 16,
    fontWeight: '600',
  }
});

class SessionList extends React.Component {
  static propTypes = {
    sessionsData: PropTypes.array
  }; 

  formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString();
  }

  constructor(props) {
    super(props);    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 

    this.state = {
      ds: ds.cloneWithRows(this.props.sessionsData)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.sessionsData !== nextProps.sessionsData) {
      this.setState(()=> {
        return {ds: this.state.ds.cloneWithRows(nextProps.sessionsData)}
      });
    }
  }

  render() {
    let output = [];

    if(!this.state.ds) return null;

    return (
      <View style={ styles.container }>
        <ListView enableEmptySections={true} style={ styles.list }
          dataSource={ this.state.ds }
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }

  renderRow(rowData, rowID) {   
    return (
      <TouchableOpacity onPress={() => this._onRowPressed(rowData)} key={rowID}>
        <View key={ rowData.sessionId }>
          <Text>{ rowData.title }</Text>
          <Text>{ rowData.format }&nbsp;
          { moment(new Date(rowData.startTime)).format('dddd, MMMM DD HH:mm') } -&nbsp;
          { moment (new Date(rowData.endTime)).format('HH:mm') }&nbsp;
          { rowData.room }</Text>
        </View>
      </TouchableOpacity>
    );
  }

    _onRowPressed(rowData) {
      this.props.navigation.navigate('SessionDetail', 
      { sessionData: rowData })
    }   
  }

const mapStateToProps = (state) => { 
  return {  
    sessionsData: state.sessions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }; 
};

SessionList.navigationOptions = {
  showLabel: false,
  showIcon: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionList);

