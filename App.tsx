import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { GreetingScreen } from './src/components/greeting.screen';
import { LandingScreen } from './src/components/landing.screen';

// navigation
// tslint:disable-next-line:variable-name
const MobileLift = StackNavigator({
  Greeting: { screen: GreetingScreen },
  Landing: { screen: LandingScreen }
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
      // <View
      //   style={ styles.container }>
      //   <GreetingScreen
      //     name='Jesse' />
      // </View>
    // );
  }
}
