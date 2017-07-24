import React from 'react'
import { 
  StyleSheet, 
  View, 
  ListView,
} from 'react-native'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from '../../../common/style'
import SessionListItem from './SessionListItem'
import SessionFilter from './SessionFilter'

import { setSelectedDay } from '../../../actions/filter'

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: style.colors.background,
  },
  textStyle: {
    color: style.colors.primary,
  },
})

class SessionList extends React.Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
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

  filterSessions() {
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.sessionsData !== nextProps.sessionsData) {
      this.setState(()=> {
        return { ds: this.state.ds.cloneWithRows(nextProps.sessionsData) }
      })
    }
  }

  render() {
    if(!this.state.ds) return null
    return (
      <View style={ styles.listContainer }>
        <SessionFilter
          day1={this.props.day1}
          day2={this.props.day2}
          onFilterDayPressed={this.props.filterSessionDay}
          onFilterSessionPressed={this.filterSessions} />
        <ListView 
          enableEmptySections={true} style={ styles.list }
          dataSource={ this.state.ds }
          renderRow={(session) => {
            return (
              <SessionListItem
                onRowPressed={ (session) => {this.props.navigation.navigate('SessionDetail', { sessionData: session })}}
                session={session} />)
          }} />
      </View>
    )
  }
}

const mapStateToProps = (state) => { 
  let fSessions = (state.sessions.all)
    .filter( ses => ses.startTime.slice(0,10) === state.filter.selectedDay)
    .sort((a,b) => {
      return b.startTime > a.startTime ? -1
            :b.startTime > a.startTime ? 1
            :0
    })
  
  return {  
    sessionsData: fSessions,
    selectedDay: state.filter.selectedDay,
    day1: state.filter.days.day1,
    day2: state.filter.days.day2,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      filterSessionDay: (day) => { dispatch(setSelectedDay(day)) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
