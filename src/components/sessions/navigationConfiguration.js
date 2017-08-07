import { StackNavigator } from 'react-navigation'
// Screens
<<<<<<< 4ea13d9cfd4d95dda0828d359572dee6e0973d15
<<<<<<< 16be030b656664568267d3793bb24420e7de3836
import SessionList from './list/SessionList'
=======
<<<<<<< 1a0ca5fa4b30dff513942bed171474b54c91ae2c
import SessionList from './SessionList'
>>>>>>> Session feedback. WIP
import SessionDetail from './SessionDetail'
=======
=======
>>>>>>> Selectable feedback. WIP
import SessionList from './SessionList';
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