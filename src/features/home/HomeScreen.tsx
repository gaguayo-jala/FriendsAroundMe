import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamList from '~navigation/RootStackParamList';
import {AppContext} from '~state/AppContext';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {logout} = useContext(AppContext);

  const goToMyGroups = () => {
    navigation.navigate('myGroups');
  };

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title="My Groups" onPress={goToMyGroups} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
