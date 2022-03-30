import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from '../../assets/fonts/selection.json';

const FriendIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'friends',
  'friends.ttf',
);

export default FriendIcon;
