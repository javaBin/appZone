import { StackNavigator } from 'react-navigation'
// Screens
import HomeScreen from './HomeScreen'

const routeConfiguration = {
  HomeScreen: { screen: HomeScreen },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'HomeScreen'
}
export const HomeNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)