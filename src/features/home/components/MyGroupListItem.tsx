import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Group from '~models/group';

export type MyGroupListItemProps = Group;

const MyGroupListItem: React.FC<MyGroupListItemProps> = group => {
  const {id, name} = group;
  const navigation = useNavigation<any>();

  const onPressItem = () => {
    navigation.navigate('myGroup', {group});
  };

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPressItem}
      activeOpacity={0.4}
      underlayColor="#DDDDDD">
      <Text>
        {id}-{name}
      </Text>
    </TouchableHighlight>
  );
};

export default MyGroupListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
