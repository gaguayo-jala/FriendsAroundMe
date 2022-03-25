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
import {findUserByEmail} from '~infrastructure/index';

GoogleSignin.configure();

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;

type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps & Props> = ({}) => {
  const {login, isAuthenticated} = useContext(AppContext);

  const onLoginHandler = async () => {
    await GoogleSignin.hasPlayServices();
    const credentials = await GoogleSignin.signIn();
    const userInfo = await findUserByEmail(credentials.user.email);

    console.log('USER FROM DB', userInfo);

    await save('credentials', credentials);
    await save('user', userInfo);
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
