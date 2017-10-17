import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
}

class Greeting extends Component<Props, {}> {
  render () {
    return <Text>Hello {this.props.name}</Text>;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Jesse'></Greeting>
        <Greeting name='Brian'></Greeting>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
