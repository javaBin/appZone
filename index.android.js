import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/android';
import Container from './src/Main';

export default class appZone extends Component {
    render() {
        return <Container App={App} />
    }
}

AppRegistry.registerComponent('appZone', () => appZone);
