import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Styles } from '../styling/styles.styling';

interface Props {
  name: string;
  navigation: any;
}

interface State {}

export class GreetingScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Welcome'
  };

  public buttonPress = () => {
    const { navigate } = this.props.navigation;
    navigate ('landing');
  }

  public render () {
    return (
      <View style={ styling.container }>
        <Text
          style={ styling.heading }>
          Welcome
        </Text>
        <Text
          style={ styling.text }>
          Lorem Ipsum Bad Jokes
        </Text>
        <View>
          <Text
            style={ styling.text }>
            Here is some description text. I should type a good bit here. Maybe that's enough.
          </Text>
          <Button
            color={ Styles.colors.secondary.main }
            onPress={ this.buttonPress }
            title='Go to Landing' />
        </View>
      </View>
    );
  }
}

const styling = StyleSheet.create({
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