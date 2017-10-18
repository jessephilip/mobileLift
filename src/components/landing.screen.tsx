import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Styles } from '../styling/styles.styling';

// this interface sets up the properties that are supposed to be on the component
interface Props {
  name: string;
  navigation: any;
}

interface State {}

// styles
const landing = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: Styles.colors.primary.dark,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingRight: 0,
    paddingBottom: 50,
    paddingLeft: 0
  },

  heading: {
    color: 'white',
    fontSize: Styles.textSizes.extraLarge
  },
  text: {
    color: Styles.colors.primary.light,
    fontSize: Styles.textSizes.normal,
    textAlign: 'center',
    padding: 10
  },
  button: {
    alignSelf: 'flex-end'
  }
});

export class LandingScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Landing Page'
  };

  public buttonPress = () => {
    const { navigate } = this.props.navigation;
    navigate ('greeting');
  }

  public render () {
    return (
      <View style={ landing.container }>
        <Text
          style={ landing.heading }>
          Landing Page
        </Text>
        <Text
          style={ landing.text }>
          I love my wife
        </Text>
        <View>
          <Text
            style={ landing.text }>
            Description Description
          </Text>
          <Button
            color={ Styles.colors.secondary.main }
            onPress={ this.buttonPress }
            title='Go to Greeting' />
        </View>
      </View>
    );
  }
}