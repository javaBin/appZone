import { addNavigationHelpers, TabNavigator } from 'react-navigation'

import { HomeNavigatorTab } from '../home/navigationConfiguration'
import { SessionNavigatorTab } from '../sessions/navigationConfiguration';
import { SettingsNavigatorTab } from '../settings/navigationConfiguration';

const routeConfiguration  = ({
    HomeNavigatorTab: { screen: HomeNavigatorTab },
    SessionNavigatorTab: { screen: SessionNavigatorTab }, 
    SettingsNavigatorTab : { screen: SettingsNavigatorTab }
});

const tabBarConfiguration = {
    tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
    }
}

export const tabBarReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, ...action.payload }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
