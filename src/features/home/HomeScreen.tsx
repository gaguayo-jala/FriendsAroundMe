import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';
import MyGroups from './components/MyGroups';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.main}>
      <View style={styles.map}></View>

      <MyGroups />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  map: {
    height: 200,
    backgroundColor: 'grey',
  },
});
