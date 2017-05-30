import { addNavigationHelpers, TabNavigator } from 'react-navigation'

import { HomeNavigatorTab } from '../home/navigationConfiguration'
import { SessionNavigatorTab } from '../sessions/navigationConfiguration';
//import FeedbackTab from '../feedback/FeedbackScreen';

const routeConfiguration  = ({
    HomeNavigatorTab: { screen: HomeNavigatorTab },
    SessionNavigatorTab: { screen: SessionNavigatorTab }, 
    //FeedbackTab: { screen: FeedbackScreen }
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
  console.warn("in here");
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, ...action.payload }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
