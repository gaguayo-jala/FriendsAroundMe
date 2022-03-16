import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import MyGroupListItem from './MyGroupListItem';
import {GetAllGroups} from '../services/my-groups-service';
import Group from '~models/group';

const MyGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const loadMyGroups = async () => {
    const allGroups = await GetAllGroups();
    setGroups(allGroups);
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
