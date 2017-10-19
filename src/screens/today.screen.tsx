import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Styles } from '../styling/styles.styling';

import { weekdayConverter } from '../constants/dateConverter';
import { monthConverter } from '../constants/dateConverter';
import { ChallengeCard } from '../components/challengeCard.component';

// this interface sets up the properties that are supposed to be on the component
interface Props {}
interface State {}

export class TodayScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  private getDate = (): string => {
    const today = Date.now()
    , dateObject = new Date(today)
    , month = dateObject.getMonth() + 1
    , day = dateObject.getDate()
    , year = dateObject.getFullYear()
    ;

    return `${ monthConverter(month) } ${ day }, ${ year }`;
  }

  private challenges = [
    { name: 'Drop and Give Me!', type: 'Set Number', muscleGroup: 'chest', amount: 20, exercise: 'push up', points: 5 },
    { name: 'Up, Up, and Away!', type: 'Set Number', muscleGroup: 'back', amount: 10, exercise: 'pull up', points: 15 },
    { name: 'Get Up to Get Down!', type: 'Set Number', muscleGroup: 'full body', amount: 20, exercise: 'burpee', points: 10 }
  ];

  public render () {

    const challengeList = this.challenges.map((challenge, i) => {
      return (
        <ChallengeCard
          key={ i }
          exercise={ challenge.exercise }
          name={ challenge.name }
          points={ challenge.points }/>
      );
    });

    return (
      <View>
        <Text
          style={ styling.date }>
          { this.getDate() }
        </Text>
        <View>
          <Text
            style={ styling.exerciseTitle }>
            { 'No exercise planned' }
          </Text>
        </View>
        { challengeList }
      </View>
    );
  }
}

const styling = StyleSheet.create({
  date: {
    backgroundColor: Styles.colors.secondary.main,
    color: 'white',
    fontSize: Styles.textSizes.normal,
    padding: 10,
    textAlign: 'center',
    textShadowColor: Styles.shadows.textShadow.textShadowColor,
    textShadowOffset: Styles.shadows.textShadow.textShadowOffset,
    textShadowRadius: Styles.shadows.textShadow.textShadowRadius
  },
  exerciseTitle: {
    fontSize: Styles.textSizes.normal,
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    textAlign: 'center'
  }
});