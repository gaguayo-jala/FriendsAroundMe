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

export const findUserByEmail = async (email: string): Promise<User | null> => {
  let foundUser: User | null = null;
  const querySnapshot = await firestore()
    .collection(userCollection)
    .where('email', '==', email)
    .limit(1)
    .get();

  querySnapshot.forEach(user => {
    foundUser = user.data() as User;
  });

  return foundUser;
};
