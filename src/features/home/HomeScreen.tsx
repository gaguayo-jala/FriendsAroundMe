import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';
import MyGroups from './components/MyGroups';
import {addGroup, removeAllGroups} from '~features/my-groups/MyGroupsSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const addGroupHandler = () => {
    dispatch(addGroup({id: Date.now(), name: 'New Group'}));
  };

  const removeAllGroupsHandler = () => {
    dispatch(removeAllGroups());
  };

  return (
    <View style={styles.main}>
      <View style={styles.map}></View>

      <Button title="Add Group" onPress={addGroupHandler} />
      <Button title="Remove All Groups" onPress={removeAllGroupsHandler} />
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
