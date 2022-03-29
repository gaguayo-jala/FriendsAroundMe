import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppContext} from '~state/AppContext';
import {selectAllGroups, addGroups} from '~features/my-groups/MyGroupsSlice';
import MyGroupListItem from './MyGroupListItem';
import Group from '~models/group';
import {subscribeToMyGroups} from '~infrastructure/index';

const MyGroups = () => {
  const {user} = useContext(AppContext);
  const dispatch = useDispatch();
  const groups: Group[] = useSelector(selectAllGroups);

  useEffect(() => {
    const subcriber = subscribeToMyGroups(user!.id!, myGroups =>
      dispatch(addGroups(myGroups)),
    );

    return () => subcriber();
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
