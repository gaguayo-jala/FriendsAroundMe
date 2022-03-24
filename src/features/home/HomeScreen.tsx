import {StyleSheet, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';
import MyGroups from './components/MyGroups';
import {addGroup, removeAllGroups} from '~features/my-groups/MyGroupsSlice';
import {getAllUsers} from '~infrastructure/index';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const addGroupHandler = () => {
    dispatch(addGroup({id: Date.now(), name: 'New Group'}));
  };

  const removeAllGroupsHandler = () => {
    dispatch(removeAllGroups());
  };

  useEffect(() => {
    getAllUsers().then(users => {
      console.log('USERS', users);
    });
  }, []);

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
