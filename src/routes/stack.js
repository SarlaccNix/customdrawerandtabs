import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../screens/Start';
import Profile from '../screens/Profile';

const StackNav = createStackNavigator();

const options = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 48,
  },
};

const Stack = () => (
  <StackNav.Navigator>
    <StackNav.Screen
      options={{ ...options, title: 'Home' }}
      name="Home"
      component={Start}
    />
    <StackNav.Screen options={options} name="Profile" component={Profile} />
  </StackNav.Navigator>
);

export default Stack;
