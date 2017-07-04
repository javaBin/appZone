import { StackNavigator } from 'react-navigation'
// Screens
<<<<<<< 16be030b656664568267d3793bb24420e7de3836
import SessionList from './list/SessionList'
=======
<<<<<<< 1a0ca5fa4b30dff513942bed171474b54c91ae2c
import SessionList from './SessionList'
>>>>>>> Session feedback. WIP
import SessionDetail from './SessionDetail'
=======
import SessionList from './SessionList';
import SessionDetail from './SessionDetail';
import Feedback from '../feedback/Feedback';
>>>>>>> Session feedback. WIP

const routeConfiguration = {
  SessionList: { screen: SessionList },
  SessionDetail: { screen: SessionDetail },
<<<<<<< 1a0ca5fa4b30dff513942bed171474b54c91ae2c
}
=======
  Feedback: { screen: Feedback}
};
>>>>>>> Session feedback. WIP
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SessionList'
}
export const SessionNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)