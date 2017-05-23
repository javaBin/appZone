import React, {Component} from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import { Button, Card, Toolbar, Drawer } from 'react-native-material-design';
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'

class App extends Component {
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
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default App
