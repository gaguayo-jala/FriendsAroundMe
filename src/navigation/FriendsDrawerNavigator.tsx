import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppContext} from '~state/AppContext';
import FriendsStackNavigator from './FriendsStackNavigator';
import LogoutScreen from '~features/login/LogoutScreen';
import LoginScreen from '~features/login/LoginScreen';
import LoadingScreen from './LoadingScreen';

const Drawer = createDrawerNavigator();

const FriendsDrawerNavigator = () => {
  const {isAuthenticated, isLoading} = useContext(AppContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Drawer.Navigator>
      {isAuthenticated ? (
        <>
          <Drawer.Screen
            name="Home"
            component={FriendsStackNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default FriendsDrawerNavigator;
