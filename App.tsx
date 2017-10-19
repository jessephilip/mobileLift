import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends Component {
  render () {
    return <MobileLift />;
  }
}
