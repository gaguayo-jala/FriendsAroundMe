import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const goToHome = () => {
    navigation.replace('home');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go To Home" onPress={goToHome} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
