import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'

import moment from 'moment'
import SplashScreen from 'react-native-splash-screen'

class App extends Component {

    componentDidMount() {
        SplashScreen.hide()
    }

    render () {
        return (
            <TabBarNavigation style={styles.container}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App
