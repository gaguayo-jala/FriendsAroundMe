import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const goToMyGroups = () => {
    navigation.navigate('myGroups');
  };

  const logout = () => {
    navigation.replace('login');
  };

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title="My Groups" onPress={goToMyGroups} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
