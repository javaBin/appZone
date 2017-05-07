/*import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

// Redux
import { Provider } from 'react-redux'
import store from './src/store'

// Navigation
import TabBarNavigation from './src/components/tab-bar-navigation/TabBarNavigation';

export default class appZone extends Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('appZone', () => appZone);


//https://medium.com/@parkerdan/react-navigation-with-complete-redux-state-management-tab-bar-and-multiple-navigators-ed30a69d9a4d*/

import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/Main';

export default class appZone extends Component {
    render() {
        return <Main />
    }
}

AppRegistry.registerComponent('appZone', () => appZone);
