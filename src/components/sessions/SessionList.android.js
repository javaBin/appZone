import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  ListView, 
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from '../../common/style'
import moment from 'moment'

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
})

class SessionList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ds: ds.cloneWithRows(this.props.sessionsData)
    }
  }
  static propTypes = {
    sessionsData: PropTypes.array,
    selectedDay: PropTypes.string,
    day1: PropTypes.string,
    day2: PropTypes.string,
    filterSessionDay: PropTypes.func,
    navigation: PropTypes.object
  };

  formatArray(list) {
    return list.sort((a,b) => {
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
        <Icon.Button 
          borderRadius={0}
          backgroundColor={style.colors.backgroundSecondary}
          name="filter" 
          size={30}
          onPress={this.filterSessions()}>         
        </Icon.Button>
      </View>
    )
  }

  getTimeSpan(fromTime, endTime) {
    let from = (moment(new Date(fromTime)).format('dddd, DD MMM HH:mm'))
    let end = (moment (new Date(endTime)).format('HH:mm'))
    return (from + ' - ' + end)
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
    if(!this.state.ds) return null
    return (
      <View style={ styles.listContainer }>
        {this.getHeader()}
        <ListView 
          enableEmptySections={true} style={ styles.list }
          dataSource={ this.state.ds }
          renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }


  renderRow(rowData, rowID) {       
    return (
        <View style={ styles.listItemWrapper} key={ rowData.sessionId }>
          <View>
            <Icon name="star-o" style={{ paddingRight: 10 }}size={ 30 } color={style.colors.color4}/> 
          </View>
          <TouchableOpacity style={{ paddingRight: 40 }} onPress={ () => this._onRowPressed(rowData) } key={ rowID }>
            <Text style={ styles.sessionTitle }>{rowData.title}</Text>
            { this.getSessionFormat(rowData.format) }
            <Text style={ styles.textStyle }>{ this.getTimeSpan(rowData.startTime, rowData.endTime) }</Text>
            <Text style={ styles.textStyle }>{ rowData.room }</Text>
          </TouchableOpacity>
        </View>
    )
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
    }
  }

