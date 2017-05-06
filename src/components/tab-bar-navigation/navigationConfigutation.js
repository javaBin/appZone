import { TabNavigator } from 'react-navigation'

import { HomeNavigatorTab } from '../home/navigationConfigutation'
import { SessionNavigatorTab } from '../sessions/navigationConfigutation';
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

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
