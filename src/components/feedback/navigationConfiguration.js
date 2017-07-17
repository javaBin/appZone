import { StackNavigator } from 'react-navigation'
// Screens
import Feedback from './Feedback';

const routeConfiguration = {
  Feedback: { screen: Feedback }
};
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Feedback'
}
//export const FeedbackNavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)