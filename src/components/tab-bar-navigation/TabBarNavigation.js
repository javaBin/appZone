import React from 'react'
import PropTypes from 'prop-types'

import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from './navigationConfiguration'

import { connect } from 'react-redux'
import firebase from '../firebase/Firebase'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    navigationState: PropTypes.object
  }

  componentDidMount() {
    firebase.analytics().setAnalyticsCollectionEnabled(true)
    firebase.analytics().setMinimumSessionDuration(150)
    firebase.crash().setCrashCollectionEnabled(true)
  }

  render() {
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
              dispatch: dispatch,
              state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)