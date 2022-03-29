import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '~navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'myGroup'>;

const MyGroupScreen: React.FC<Props> = ({
  navigation,
  route: {
    params: {group},
  },
}) => {
  useEffect(() => {
    navigation.setOptions({title: group.name});
  }, []);

  return (
    <View>
      <Text>MyGroup is {group.id}</Text>
    </View>
  );
};

export default MyGroupScreen;

const styles = StyleSheet.create({});
