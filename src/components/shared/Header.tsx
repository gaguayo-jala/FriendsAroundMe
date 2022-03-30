import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import FriendIcon from '~atoms/FriendIcon';

type HeaderProps = {
  title?: string | undefined;
};

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>

      <Menu>
        <MenuTrigger>
          <FriendIcon name="dots-three-vertical" size={16} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => alert('Add contact')}
            text="Add Contact"
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
