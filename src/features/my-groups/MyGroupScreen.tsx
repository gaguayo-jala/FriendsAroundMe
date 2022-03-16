import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '~navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'myGroup'>;

const MyGroupScreen: React.FC<Props> = ({
  route: {
    params: {groupId},
  },
}) => {
  return (
    <View>
      <Text>MyGroup is {groupId}</Text>
    </View>
  );
};

export default MyGroupScreen;

const styles = StyleSheet.create({});
