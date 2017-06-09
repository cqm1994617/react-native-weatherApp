import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Detail from './Detail';

import {StackNavigator} from 'react-navigation';

class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',

  };

  toNext = () => {
    const {navigate} = this.props.navigation;
    navigate('Detail', {
      title: "这是标题"
    });
  };

  render() {
    return (
      <View>
        <Text>12345</Text>
        <TouchableOpacity onPress={this.toNext}>
          <Text>下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: App
  },
  Detail: {
    screen: Detail
  }
});
