import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {AppContext} from '~state/AppContext';

const LogoutScreen = () => {
  const {logout} = useContext(AppContext);

  useEffect(() => {
    logout();
  }, []);

  return (
    <View>
      <Text>Bye!</Text>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({});
