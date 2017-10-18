import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Greeting } from './src/components/greeting.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Greeting name='Jesse'></Greeting>
      </View>
    );
  }
}
