import React from 'react'
import PropTypes from 'prop-types'

import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from './navigationConfiguration'

import { connect } from 'react-redux'

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