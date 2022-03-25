import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyGroupsScreen from '~features/my-groups/MyGroupsScreen';
import MyGroupScreen from '~features/my-groups/MyGroupScreen';
import HomeScreen from '~features/home/HomeScreen';
import RootStackParamList from './RootStackParamList';
const Stack = createNativeStackNavigator<RootStackParamList>();

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="myGroups" component={MyGroupsScreen} />
      <Stack.Screen name="myGroup" component={MyGroupScreen} />
    </Stack.Navigator>
  );
};

export default FriendsStackNavigator;
