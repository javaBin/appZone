'use strict';

import React from 'react';
import {
  TabBarIOS,
  Navigator,
  View,
  Text,
  StyleSheet

} from 'react-native';

// TODO add switchTab
import { switchTab } from '../../actions/navigation';
import { connect } from 'react-redux';

import SettingsScreen from '../settings/SettingsScreen';

class TabBarView extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  onTabSelect(selectedTab) {
    if (this.props.selectedTab !== selectedTab) {
      this.props.onTabSelect(selectedTab);
    }
  }


  _renderContent = (color, pageText, num) => {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  renderScreenSettingsScreen = () => {
    return (
      <SettingsScreen style={styles.tabContent}/>
    )
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Blue Tab"
          selected={this.props.selectedTab === 'schedule'}
          onPress={this.onTabSelect.bind(this, 'schedule')}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badgeColor="black"
          selected={this.props.selectedTab === 'my-schedule'}
          onPress={this.onTabSelect.bind(this, 'my-schedule')}>
          {this._renderContent('#783E33', 'Red Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          selected={this.props.selectedTab === 'settings'}
          onPress={this.onTabSelect.bind(this, 'settings')}>
          {this.renderScreenSettingsScreen()}
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

function select(store) {
  return {
    selectedTab: store.navigation.selectedTab
  };
}

function actions(dispatch) {
  return {
    onTabSelect: (selectedTab) => dispatch(switchTab(selectedTab)),
  };
}

module.exports = connect(select, actions)(TabBarView);

