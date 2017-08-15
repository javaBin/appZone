import { StackNavigator } from 'react-navigation'
// Screens
import SessionList from './list/SessionList';
import SessionDetail from './SessionDetail';
import Feedback from '../feedback/Feedback';

const routeConfiguration = {
  SessionList: { screen: SessionList },
  SessionDetail: { screen: SessionDetail },
  Feedback: { screen: Feedback}
};
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SessionList'
}
export const SessionNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)