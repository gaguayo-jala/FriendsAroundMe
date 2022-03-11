import EncryptedStorage from 'react-native-encrypted-storage';

export const save = async (key: string, value: any) => {
  let valueString = (value || '').toString();

  if (value !== null && typeof value === 'object') {
    valueString = JSON.stringify(value);
  }

  await EncryptedStorage.setItem(key, valueString);
};

export const getItem = EncryptedStorage.getItem;
