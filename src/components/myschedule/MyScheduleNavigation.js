'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { MyScheduleNavigatorTab } from './navigationConfiguration'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.sessions
    }
}

class TabMyScheduleNavigation extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Schedule',
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <MyScheduleNavigatorTab
                navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: navigationState
                })}
            />
        )
    }
}


export default connect(mapStateToProps)(TabMyScheduleNavigation)