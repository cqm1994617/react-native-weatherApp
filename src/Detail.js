import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {TabNavigator, TabBarTop} from 'react-navigation';

class A extends React.Component {

  render() {
    return (
      <View>
        <Text>1</Text>
      </View>
    );
  }
}

class B extends React.Component {

  render() {
    return (
      <View>
        <Text>2</Text>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator(
  {
    fds: {screen: A},
    asd: {screen: B},
  },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition: "position",
    swipeEnabled: true
  }
);

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

export default MainScreenNavigator;
