import * as Firebase from './firebase';

export const getAllUsers = Firebase.default.Users.getAllUsers;
export const findUserByEmail = Firebase.default.Users.findUserByEmail;
export const subscribeToMyGroups = Firebase.default.Groups.subscribeToMyGroups;
export const checkContactEmails = Firebase.default.Users.checkContactEmails;
export const updateGroup = Firebase.default.Groups.updateGroup;
