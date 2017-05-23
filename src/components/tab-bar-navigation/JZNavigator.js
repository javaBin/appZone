'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  Platform
} from 'react-native';
import { connect }  from 'react-redux';

import TabBarView from './TabBarView';


class JZNavigator extends React.Component {
  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene(route, navigator) {
    return <TabBarView navigator={navigator} />;
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

function select(store) {
  return {
    tab: store.navigation.tab
  };
}

module.exports = connect(select)(JZNavigator);
