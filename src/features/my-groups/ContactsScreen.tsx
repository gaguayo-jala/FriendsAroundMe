import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const ContactsScreen = () => {
  const getContactsPermissions = async (): Promise<boolean> => {
    try {
      var hasPermissions = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );

      console.info('Permissions', hasPermissions);

      return !!hasPermissions;
    } catch (error) {
      console.log('ERROR', error);
      return false;
    }
  };

  const getContacts = async () => {
    const hasPermissions = getContactsPermissions();

    if (!hasPermissions) {
      return;
    }

    const contacts = await Contacts.getAll();
    console.info('CONTACTS', contacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <View>
      <Text>ContactsScreen</Text>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
