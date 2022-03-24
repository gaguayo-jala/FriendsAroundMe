import firestore from '@react-native-firebase/firestore';

import User from '~models/user';

const userCollection = 'users';

export const getAllUsers = async (): Promise<User[]> => {
  const querySnapshot = await firestore().collection(userCollection).get();
  const allUsers: User[] = [];

  querySnapshot.forEach(user => {
    allUsers.push(user.data() as User);
  });

  return allUsers;
};
