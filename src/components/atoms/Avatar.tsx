import {Image, StyleSheet} from 'react-native';
import React from 'react';

const defaultAvatar = require('assets/images/default-avatar.png');

const Avatar = () => {
  return <Image style={styles.image} source={defaultAvatar} />;
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
