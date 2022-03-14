import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '~features/login/LoginScreen';
import MyGroupsScreen from '~features/my-groups/MyGroupsScreen';
import MyGroupScreen from '~features/my-groups/MyGroupScreen';
import HomeScreen from '~features/home/HomeScreen';
import RootStackParamList from './RootStackParamList';
import {AppContext} from '~state/AppContext';
const Stack = createNativeStackNavigator<RootStackParamList>();

import LoadingScreen from './LoadingScreen';

const FriendsStackNavigator = () => {
  const {isAuthenticated, isLoading} = useContext(AppContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="myGroups" component={MyGroupsScreen} />
          <Stack.Screen name="myGroup" component={MyGroupScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default FriendsStackNavigator;
