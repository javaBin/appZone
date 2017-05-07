import React, {Component} from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import { Button, Toolbar } from 'react-native-material-design';
=======
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import { Button, Card, Toolbar, Drawer } from 'react-native-material-design';
import TabBarNavigation from './tab-bar-navigation/TabBarNavigation'
>>>>>>> added config for induvidual tabs

class App extends Component {
    render () {
        return (
<<<<<<< HEAD
            <TabBarNavigation style={styles.container}/>
=======
            <View style={styles.container}>
                <Text>Hei</Text>
                <TabBarNavigation />
            </View>
>>>>>>> added config for induvidual tabs
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
