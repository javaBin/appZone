'use strict'
// React
import React from 'react'
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


export default connect(mapStateToProps)(TabThreeNavigation)