import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyGroupsScreen from '~features/my-groups/MyGroupsScreen';
import MyGroupScreen from '~features/my-groups/MyGroupScreen';
import HomeScreen from '~features/home/HomeScreen';
import ContactScreen from '~features/my-groups/ContactsScreen';

import RootStackParamList from './RootStackParamList';
import Header from '~shared/Header';
const Stack = createNativeStackNavigator<RootStackParamList>();

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="myGroups" component={MyGroupsScreen} />
      <Stack.Screen
        name="myGroup"
        component={MyGroupScreen}
        options={{
          title: 'My Group',
          headerShown: true,
          header: ({options, navigation}) => (
            <Header
              title={options.title}
              onPressAddContacts={() => navigation.navigate('contacts')}
            />
          ),
        }}
      />
      <Stack.Screen name="contacts" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default FriendsStackNavigator;
