import { StackNavigator } from 'react-navigation'
// Screens
import SessionScreen from './SessionScreen';
import SessionScreenTwo from './SessionScreenTwo';

const routeConfiguration = {
  SessionScreen: { screen: SessionScreen },
  SessionScreenTwo: { screen: SessionScreenTwo },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SessionScreen'
}
export const SessionNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)