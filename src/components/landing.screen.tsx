import React, { Component } from 'react';

// for tab navigation
import { TabNavigator } from 'react-navigation';
import { TodayScreen } from '../screens/today.screen';
import { ScheduleScreen } from '../screens/schedule.screen';
import { LogScreen } from '../screens/log.screen';

// styling
import { Styles } from '../styling/styles.styling';

interface Props {}
interface State {}

// tslint:disable-next-line:variable-name
const TabNavigation = TabNavigator({
  today: { screen: TodayScreen },
  schedule: { screen: ScheduleScreen },
  log: { screen: LogScreen }
}, {
    animationEnabled: true,
    lazy: true,
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: Styles.colors.secondary.main,
      inactiveTintColor: '#fff',
      inactiveBackgroundColor: Styles.colors.primary.main,
      activeBackgroundColor: Styles.colors.primary.light
    }
  }
);

export class LandingScreen extends Component<Props, State> {

  constructor (props) {
    super(props);
  }

  public render () {
    return (
      <TabNavigation />
    );
  }
}