import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView } from 'react-native';
import { Styles } from '../styling/styles.styling';
import { ChallengeCard } from '../components/challengeCard.component';

import { currentChallenges } from '../constants/mock.data';
import { pastChallenges } from '../constants/mock.data';

// this interface sets up the properties that are supposed to be on the component
interface Props {
  name: string;
  navigation: any;
}

interface State {}

export class ChallengesScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  public render () {
    const current = currentChallenges.map((challenge, i) => {
      return (
        <View
          key={ 'view' + i }
          style={ styling.challengeCard }>
          <ChallengeCard
            key={ i }
            amount={ challenge.amount }
            exercise={ challenge.exercise }
            isActiveChallenge={ true }
            muscleGroup={ challenge.muscleGroup }
            name={ challenge.name }
            points={ challenge.points }
            type={ challenge.type }/>
        </View>
      );
    });

    const past = pastChallenges.map((challenge, i) => {
      return (
        <View
          key={ 'view' + i }
          style={ styling.challengeCard }>
          <ChallengeCard
            key={ i }
            amount={ challenge.amount }
            exercise={ challenge.exercise }
            muscleGroup={ challenge.muscleGroup }
            name={ challenge.name }
            points={ challenge.points }
            type={ challenge.type }/>
        </View>
      );
    });

    return (
      <View>
        <Text
          style={ styling.challengesHeading }>
          Current Challenges
        </Text>
        { current }
        <Text
          style={ styling.challengesHeading }>
          Completed Challenges
        </Text>
        <ScrollView>
          { past }
        </ScrollView>
      </View>
    );
  }
}

const styling = StyleSheet.create({
  challengeCard: {
    marginTop: 5,
    marginRight: 20,
    marginBottom: 5,
    marginLeft: 20
  },
  challengesHeading: {
    fontSize: Styles.textSizes.small
  }
});