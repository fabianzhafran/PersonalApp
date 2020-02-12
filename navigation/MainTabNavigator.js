import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GoogleVisionScreen from '../screens/GoogleVisionScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';

const GoogleVisionStack = createStackNavigator(
  {
    GoogleVision: GoogleVisionScreen,
  },
  config
);

GoogleVisionStack.navigationOptions = {
  tabBarLabel: 'Google Vision',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'google'} />
  ),
};

GoogleVisionStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GoogleVisionStack,
}, {
  tabBarOptions : {
    style : {
      backgroundColor : 'black',
      // opacity : 0.3,
      margin : 0,
      padding : 0,
    }
  }
});

tabNavigator.path = '';

const styles = StyleSheet.create({
  navTab : {
    backgroundColor : 'grey',
    opacity : 0.5,
  }
})

export default tabNavigator;
