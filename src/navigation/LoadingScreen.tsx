/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {AppContext} from '~state/AppContext';
import {getObject} from '~store/secure-store';
import Credentials from '~models/credentials';
import * as constans from '~constants/system';
import User from '~models/user';

const LoadingScreen = () => {
  const {login, setIsLoading} = useContext(AppContext);

  const loadComponent = async () => {
    const credentials = await getObject<Credentials>(constans.credentials);

    if (credentials) {
      const userInfo = await getObject<User>(constans.userInfo);
      login(userInfo!);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadComponent();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
