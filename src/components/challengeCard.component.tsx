import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Styles } from '../styling/styles.styling';

interface Props {
  exercise: string;
  name: string;
  points: number;

}

interface State {}

export class ChallengeCard extends Component<Props, State> {
  constructor (props) {
    super(props);
  }

  public cardTouch = () => {
    console.log(this.props.name);
  }

  public render () {
    return (
      <TouchableOpacity
        onPress={ this.cardTouch }>
        <View
          style={ styling.challengeView }>
          <View
            style={ styling.challengePointsView }>
            <Text
              style={ styling.challengePointsText }>
              { this.props.points }
            </Text>
          </View>
          <View
            style={ styling.challengeInfo }>
            <View
              style={ styling.challengeHeader }>
              <Text
                style={ styling.challengeName }>
                { this.props.name }
              </Text>
            </View>
            <Text>
              { this.props.exercise }
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styling = StyleSheet.create({
  challengeView: {
    backgroundColor: Styles.colors.secondary.light,
    borderWidth: 1,
    borderColor: Styles.colors.secondary.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    shadowColor: Styles.shadows.iosBoxShadow.shadowColor,
    shadowOffset: Styles.shadows.iosBoxShadow.shadowOffset,
    shadowOpacity: Styles.shadows.iosBoxShadow.shadowOpacity,
    shadowRadius: Styles.shadows.iosBoxShadow.shadowRadius
  },
  challengePointsView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  challengePointsText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: Styles.shadows.textShadow.textShadowColor,
    textShadowOffset: Styles.shadows.textShadow.textShadowOffset,
    textShadowRadius: Styles.shadows.textShadow.textShadowRadius
  },
  challengeInfo: {
    flex: 6,
    flexDirection: 'column'
  },
  challengeHeader: {
    padding: 5
  },
  challengeName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});