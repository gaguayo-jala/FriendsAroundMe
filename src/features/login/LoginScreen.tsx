import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';
import {AppContext} from '~state/AppContext';
import {save} from '~store/secure-store';

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;

type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps & Props> = ({}) => {
  const {login, isAuthenticated} = useContext(AppContext);

  const onLoginHandler = async () => {
    await save('credentials', {name: 'Gonzalo'});
    login();
  };

  return (
    <View>
      <Text>LoginScreen: {isAuthenticated ? 'TRUE' : 'FALSE'}</Text>
      <Button title="Login In Memory" onPress={onLoginHandler} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
