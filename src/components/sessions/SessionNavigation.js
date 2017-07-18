'use strict'
// React
import React from 'react'
import PropTypes from 'prop-types'
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

  static propTypes = {
    dispatch: PropTypes.func,
    navigationState: PropTypes.object
  }

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