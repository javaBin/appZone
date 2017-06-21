import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ListView, 
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from '../../common/style';
import moment from 'moment';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: style.colors.background,
  },
  constainer: {
    margin: 10,
  },
  sessionTitle: {
    color: style.colors.primary,    
    fontSize: 16,
    fontWeight: '600',
  },
  textStyle: {
    color: style.colors.primary,
  },
  listItemWrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  filterButtonWrapper: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  filterButton: {
    flexGrow: 2,
    backgroundColor: style.colors.backgroundColor,
    borderColor: style.colors.backgroundSecondary,
    borderWidth: 3,
  },
  filterButtonText: {
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 15,
    color: style.colors.color3,
  },
  formatPresentation: {
    color: style.colors.color1,
  },
  formatLightningTalk: {
    color: style.colors.color4,
  },
  formatWorkshop: {
    color: style.colors.color3,
  }
});

class SessionList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = {
      ds: ds.cloneWithRows(this.props.sessionsData)
    }
  }
  static propTypes = {
    sessionsData: PropTypes.array
  };

  formatArray(array) {
    
    return array.sort((a,b) => {
      return b.startTime > a.startTime ? -1
            :b.startTime > a.startTime ? 1
            :0
    })
  }
  filterSessionDay() {

  }

  filterSessions() {
    
  }
  getHeader() {
    return (
      <View style= { styles.filterButtonWrapper }>
        <TouchableOpacity
          style={ styles.filterButton }
          onPress={this.filterSessionDay.bind(1)}
          title="Day 1"
          accessibilityLabel="List sessions, day one">
            <Text style={styles.filterButtonText}>DAY 1</Text></TouchableOpacity>
        <TouchableOpacity
          style={ styles.filterButton }
          onPress={this.filterSessionDay.bind(1)}
          title="Day 1"
          accessibilityLabel="List sessions, day one"
        ><Text style={styles.filterButtonText}>DAY 2</Text></TouchableOpacity>
        <TouchableOpacity
          style={ styles.filterButton }
          onPress={this.filterSessions()}
          title="Filter"
          accessibilityLabel="Filter sessions"
        ><Text style={styles.filterButtonText}>Filter</Text></TouchableOpacity>     
      </View>
    );
  }

  getTimeSpan(fromTime, endTime) {
    let from = (moment(new Date(fromTime)).format('dddd, DD MMM HH:mm'));
    let end = (moment (new Date(endTime)).format('HH:mm'));
    return (from + ' - ' + end); 
  }

  getSessionFormat(format) {
    if (format === 'presentation') {
      return <Text style={ styles.formatPresentation }>{format}</Text>      
    } else if(format === 'lightning-talk') {
      return <Text style={ styles.formatLightningTalk }>{format}</Text>            
    } else {
      return <Text style={ styles.formatWorkshop }>{format}</Text>                  
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.sessionsData !== nextProps.sessionsData) {
      this.setState(()=> {
        return {ds: this.state.ds.cloneWithRows(this.formatArray(nextProps.sessionsData))}
      });
    }
  }

  render() {
    if(!this.state.ds) return null;

    return (
      <View style={ styles.listContainer }>
        {this.getHeader()}
        <ListView 
          enableEmptySections={true} style={ styles.list }
          dataSource={ this.state.ds }
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }


  renderRow(rowData, rowID) {       
    return (
        <View style={ styles.listItemWrapper} key={ rowData.sessionId }>
          <TouchableOpacity style={{paddingRight: 40}} onPress={() => this._onRowPressed(rowData)} key={rowID}>
            <Text style={ styles.sessionTitle }>{rowData.title}</Text>
            {this.getSessionFormat(rowData.format)}
            <Text style={ styles.textStyle }>{this.getTimeSpan(rowData.startTime, rowData.endTime)}</Text>
            <Text style={ styles.textStyle }>{rowData.room}</Text>
          </TouchableOpacity>
        </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(SessionList);

