import * as Firebase from './firebase';

export const getAllUsers = Firebase.default.Users.getAllUsers;
export const findUserByEmail = Firebase.default.Users.findUserByEmail;