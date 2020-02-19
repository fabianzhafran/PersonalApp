import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GoogleVisionScreen from '../screens/GoogleVisionScreen';
import ThreeJsScreen from '../screens/ThreeJsScreen';
import { CullFaceNone } from 'three';

const config = Platform.select({
  web: { headerMode: 'none' },
  default: { headerMode : 'none' },
});

// ~~~~~~~~~~~~~ HOME STACK NAVIGATOR
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

// ~~~~~~~~~~~~~ GOOGLE VISION STACK NAVIGATOR
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

// ~~~~~~~~~~~~~ THREE JS SCREEN STACK NAVIGATOR 
const ThreeJsStack = createStackNavigator(
  {
    ThreeJs: ThreeJsScreen,
  },
  config
);

ThreeJsStack.navigationOptions = {
  tabBarLabel: '3D Playground',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'eye'} />
  ),
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~ BOTTOM TAB NAV
// ~~~~~~~~~~~~~~~~~~~~~~~~~

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GoogleVisionStack,
  ThreeJsStack,
}, {
  tabBarOptions : {
    style : {
      backgroundColor : 'black',
      // opacity : 0.3,
      margin : 0,
      padding : 0,
      headerMode : 'none',
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
