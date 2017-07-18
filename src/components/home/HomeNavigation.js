'use strict'
// React
import React from 'react'
import PropTypes from 'prop-types'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { HomeNavigatorTab } from './navigationConfiguration'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.sessions
    }
}

class TabHomeNavigation extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Session',
    }

    static propTypes = {
      dispatch: PropTypes.func,
      navigationState: PropTypes.object
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <HomeNavigatorTab
                navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: navigationState
                })}
            />
        )
    }
}

export default connect(mapStateToProps)(TabHomeNavigation)