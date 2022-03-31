import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Contact as ContactProps} from 'react-native-contacts';

const Contact: React.FC<ContactProps> = ({
  familyName,
  givenName,
  emailAddresses,
}) => {
  const [emailAddress = {email: ''}] = emailAddresses;
  const {email} = emailAddress;

  return (
    <View style={styles.container}>
      <View style={styles.photo} />

      <View style={styles.contact}>
        <View style={styles.name}>
          <Text>
            {givenName} {familyName}
          </Text>
        </View>
        <View style={styles.email}>
          <Text>{email}</Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  contact: {},
  photo: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#666',
    marginRight: 12,
  },
  name: {},
  email: {},
});
