import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FriendsStackNavigator from './FriendsStackNavigator';

const Drawer = createDrawerNavigator();

const FriendsDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={FriendsStackNavigator} />
      <Drawer.Screen name="Logout" component={() => <></>} />
    </Drawer.Navigator>
  );
};

export default FriendsDrawerNavigator;
