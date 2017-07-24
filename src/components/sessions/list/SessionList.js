// @flow

import React from 'react'
import { ListView, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from '../../../common/style'
import SessionListItem from './SessionListItem'
import SessionFilter from './SessionFilter'
import SessionSectionHeader from './SessionSectionHeader'
import { setSelectedDay } from '../../../actions/filter'
import groupBy from 'lodash/groupBy'

import type { Dispatch } from '../../../types/Actions'

const styles = StyleSheet.create({
  list: {},
  listContainer: {
    flex: 1,
    backgroundColor: style.colors.background,
  },
  textStyle: {
    color: style.colors.primary,
  }
})

const updateState = (state, props) => {
  if (props.sessionsData) {
    const bySlot = groupBy(props.sessionsData, s => s.slot)
    const sectionHeader = Object.keys(bySlot)
    const bySlotAndSession = sectionHeader.map(sh => bySlot[sh].map(s => s.session.sessionId))
    return {
      ds: state.ds.cloneWithRowsAndSections(
        props.sessionsData,
        sectionHeader,
        bySlotAndSession
      )
    }
  } else {
    return state
  }
}

class SessionList extends React.Component {
  state: {
    ds: ListView.DataSource
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2,
       sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
       getSectionData: (sessions, sectionId) => (props.slotTimes.find(st => st.num === parseInt(sectionId, 10))),
       getRowData: (sessions, sectionId, rowId) => (sessions.find(s => s.session.sessionId === rowId))
    })
    this.state = updateState({ds: ds}, props)
  }
  static propTypes = {
    sessionsData: PropTypes.array,
    slotTimes: PropTypes.array,
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
      this.setState(updateState)
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
          removeClippedSubviews={false}
          enableEmptySections={true} style={ styles.list }
          dataSource={ this.state.ds }
          renderRow={(sessionAndSlot) =>
             (<SessionListItem
                onRowPressed={ (session) => {this.props.navigation.navigate('SessionDetail', { sessionData: session })}}
                session={sessionAndSlot.session} />)
          }
          renderSectionHeader={(a, slotTimeId) =>
            (<SessionSectionHeader slotTimeId={parseInt(slotTimeId, 10)} slotTimes={this.props.slotTimes} />)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => { 
  const sessions = (state.sessions.slots.find(s => s.day === state.filter.selectedDay) ||
    { day: state.filter.selectedDay, sessionBySlot: [] }).sessionBySlot

  return {  
    sessionsData: sessions,
    slotTimes: state.sessions.slotTimes,
    selectedDay: state.filter.selectedDay,
    day1: state.filter.days.day1,
    day2: state.filter.days.day2,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ filterSessionDay: (day) => { dispatch(setSelectedDay(day)) } })

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
