'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { SessionNavigatorTab } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    navigationState: state.sessions
  }
}

class TabSessionNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Session Title',
  };

  render() {
    const { dispatch, navigationState } = this.props
    return (
      <SessionNavigatorTab
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
        })}
      />
    )
  }
}


export default connect(mapStateToProps)(TabSessionNavigation)