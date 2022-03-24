import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FriendsDrawerNavigator from './FriendsDrawerNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <FriendsDrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
