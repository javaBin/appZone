import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'
import firebase from 'react-native-firebase'

class App extends Component {
    render() {
        firebase.analytics().setAnalyticsCollectionEnabled(true);
        firebase.analytics().setMinimumSessionDuration(15000);
        return (
            <TabBarNavigation style={styles.container} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App
