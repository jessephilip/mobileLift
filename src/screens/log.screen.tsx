import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Styles } from '../styling/styles.styling';

// this interface sets up the properties that are supposed to be on the component
interface Props {
  name: string;
  navigation: any;
}

interface State {}

export class LogScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  public render () {
    return (
      <Text>This is the Log Screen</Text>
    );
  }
}