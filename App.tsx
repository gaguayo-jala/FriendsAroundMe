import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyGroupsScreen from '~features/my-groups/MyGroupsScreen';

const App = () => {
  return (
    <NavigationContainer>
      <MyGroupsScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
