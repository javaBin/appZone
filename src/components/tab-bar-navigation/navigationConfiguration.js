import React from 'react'

import { TabNavigator } from 'react-navigation'

import { HomeNavigatorTab } from '../home/navigationConfiguration'
import { SessionNavigatorTab } from '../sessions/navigationConfiguration'
import { SettingsNavigatorTab } from '../settings/navigationConfiguration'

import style from '../../common/style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const routeConfiguration = {
    HomeNavigatorTab: { 
      screen: HomeNavigatorTab,
      navigationOptions: {            
        tabBarIcon: ({ tintColor }) =>
           ( <FontAwesome size={ 30 } name='home' color={tintColor}/> )
      },
      
     },
    SessionNavigatorTab: {
      screen: SessionNavigatorTab,
      navigationOptions: {            
        tabBarIcon: ({ tintColor }) =>
           ( <FontAwesome size={ 30 } name='lightbulb-o' color={tintColor}/> )
      },
    }, 
    SettingsNavigatorTab : { 
      screen: SettingsNavigatorTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
           ( <FontAwesome size={ 30 } name='cog' color={tintColor}/> )
      },
    }
}

const tabBarConfiguration = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
  // tint color is passed to text and icons (if enabled) on the tab bar
      activeTintColor: style.colors.color3,
      inactiveTintColor: style.colors.secondary,
  // background color is for the tab component
      activeBackgroundColor: style.colors.background,
      inactiveBackgroundColor: style.colors.background,
      activeBorderBottomColor: style.colors.color1,
      style: {
        backgroundColor: style.colors.background,
        borderTopWidth: 2,
        borderTopColor: style.colors.color1,        
      },
      indicatorStyle: {
        backgroundColor: style.colors.color4,
      },
      iconStyle: {
        width: 100,
        height: 100,
        paddingBottom: 10,
      }
   }
}

export const tabBarReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, ...action.payload }
  } else {
    return TabBar.router.getStateForAction(action, state)
  }
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)