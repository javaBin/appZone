import { StackNavigator } from 'react-navigation'
// Screens
import MyScheduleScreen from './MyScheduleScreen'

const routeConfiguration = {
  MyScheduleScreen: { screen: MyScheduleScreen },
}
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'MyScheduleScreen'
}

export const MyScheduleNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)