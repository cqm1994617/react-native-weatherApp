import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>
        <Text>12345</Text>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: App
  }
});
