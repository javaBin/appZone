import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'

import moment from 'moment'
import nbLocale  from 'moment/locale/nb'

class App extends Component {
    render () {
        moment.updateLocale('nb', nbLocale)
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
