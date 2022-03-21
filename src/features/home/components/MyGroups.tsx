import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '~store/index';
import MyGroupListItem from './MyGroupListItem';;
import Group from '~models/group';

const MyGroups = () => {
  const groups: Group[] = useSelector(
    (state: RootState) => state.groups.groups,
  );

  const loadMyGroups = async () => {
    // const allGroups = await GetAllGroups();
    // setGroups(allGroups);
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
