import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import FriendsStackNavigator from './FriendsStackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <FriendsStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
