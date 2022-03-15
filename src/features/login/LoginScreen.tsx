import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import RootStackParamList from '~navigation/RootStackParamList';
import {AppContext} from '~state/AppContext';
import {save} from '~store/secure-store';

GoogleSignin.configure();

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;

type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps & Props> = ({}) => {
  const {login, isAuthenticated} = useContext(AppContext);

  const onLoginHandler = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    await save('credentials', userInfo);
    login();
  };

  return (
    <View>
      <Text>LoginScreen: {isAuthenticated ? 'TRUE' : 'FALSE'}</Text>
      <GoogleSigninButton onPress={onLoginHandler} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
