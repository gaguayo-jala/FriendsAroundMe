import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {useState} from 'react';
import {PermissionsAndroid, ScrollView} from 'react-native';
import Contacts from 'react-native-contacts';
import {useFocusEffect} from '@react-navigation/native';

import ContactRow from '~shared/Contact';
import {checkContactEmails} from '~infrastructure/index';

const ContactsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  const getContactsPermissions = async (): Promise<boolean> => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    ).then(() => true);
  };

  const getContacts = async () => {
    try {
      setLoading(true);

      const hasPermissions = await getContactsPermissions();

      if (!hasPermissions) {
        return;
      }

      const allContact = await Contacts.getAll();

      const contactsWithEmail = allContact
        .map(contact => {
          const [emailAddress = {email: ''}] = contact.emailAddresses;
          const {email} = emailAddress;
          return {...contact, email};
        })
        .filter(contact => contact.email);

      const emails = contactsWithEmail.map(contact => contact.email);

      const validEmails = await checkContactEmails(emails);

      const validContacts = contactsWithEmail.filter(
        contact => validEmails.indexOf(contact.email) > -1,
      );

      setContacts(validContacts);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getContacts();
    }, []),
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      {contacts.map(contact => (
        <ContactRow key={contact.recordID} {...contact} />
      ))}
    </ScrollView>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
