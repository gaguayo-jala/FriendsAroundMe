import User from '~models/user';
import * as Firebase from './firebase';

export const getAllUsers = Firebase.default.Users.getAllUsers;
