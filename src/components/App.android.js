import React, {Component} from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import { Button, Card, Toolbar, Drawer } from 'react-native-material-design';
import ListConferences from './ListConferences'

class App extends Component {
    render () {
        const { conferences } = this.props;

        return (
            <View style={styles.container}>
                <Toolbar title="JavaZone 2017" />
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Button text="Hello" />
                <ListConferences conferences={conferences} />
            </View>
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
