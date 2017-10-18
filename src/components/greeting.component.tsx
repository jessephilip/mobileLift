import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Styles } from '../styling/styles.styling';

// the interface sets up the properties that are supposed to be on the component
interface Props {
  name: string;
}

interface State {}

// styles
const welcome = StyleSheet.create({
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

export class Greeting extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  buttonPress () {
    console.log('hello');
  }

  render () {
    return (
      <View style={ welcome.container }>
        <Text
          style={ welcome.heading }>
          Welcome
        </Text>
        <Text
          style={ welcome.text }>
          Lorem Ipsum Bad Jokes
        </Text>
        <View>
          <Text
            style={ welcome.text }>
            Here is some description text. I should type a good bit here. Maybe that's enough.
          </Text>
          <Button
            color={ Styles.colors.secondary.main }
            onPress={ this.buttonPress }
            title='Login'>
          </Button>
        </View>
      </View>
    );
  }
}