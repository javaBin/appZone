import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding'

class App extends Component {

    render() {
        return (
          <View style={styles.main}>
            <StatusBarPaddingIOS />
            <TabBarNavigation style={styles.container} />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    main: {
        height: '100%',
        width: '100%'
    }
})

export default App
