import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectAllGroups} from '../HomeSlice';
import {getAllGroups} from '~features/my-groups/MyGroupsSlice';
import MyGroupListItem from './MyGroupListItem';
import Group from '~models/group';

const MyGroups = () => {
  const dispatch = useDispatch();
  const groups: Group[] = useSelector(selectAllGroups);

  const loadMyGroups = async () => {
    dispatch(getAllGroups());
  };

  useEffect(() => {
    loadMyGroups();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {groups.map((group, index) => (
        <MyGroupListItem key={index} {...group} />
      ))}
    </ScrollView>
  );
};

export default MyGroups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
