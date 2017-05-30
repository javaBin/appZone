import { StackNavigator } from 'react-navigation'
// Screens
import SettingsScreen from './SettingsScreen'

const routeConfiguration = {
  SettingsScreen: { screen: SettingsScreen },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SettingsScreen'
}

export const SettingsNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)