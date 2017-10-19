import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// screens
import { GreetingScreen } from './src/screens/greeting.screen';
import { LandingScreen } from './src/screens/landing.screen';

// tslint:disable-next-line:variable-name
const MobileLift = StackNavigator({
  'greeting': {
    screen: GreetingScreen
  },
  'landing': {
    screen: LandingScreen,
    navigationOptions: {
      title: 'Uplift'
    }
  }
});

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  render () {
    return (
      <MobileLift />
    );
  }
}
