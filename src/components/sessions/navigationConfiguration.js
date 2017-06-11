import { StackNavigator } from 'react-navigation'
// Screens
import SessionList from './SessionList';
import SessionDetail from './SessionDetail';

const routeConfiguration = {
  SessionList: { screen: SessionList },
  SessionDetail: { screen: SessionDetail },
};
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SessionList'
}
export const SessionNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)