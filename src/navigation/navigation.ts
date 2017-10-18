import { StackNavigator } from 'react-navigation';

// pages
import { GreetingScreen } from '../components/greeting.screen';
import { LandingScreen } from '../components/landing.screen';
// import { LandingScreen } from '../components/landing.screen';

// tslint:disable-next-line:variable-name
export const Navigation = StackNavigator({
  Greeting: { screen: GreetingScreen },
  Landing: { screen: LandingScreen }
});