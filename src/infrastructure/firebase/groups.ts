import firestore from '@react-native-firebase/firestore';

import Group from '~models/group';
const groupsCollection = 'groups';

export const subscribeToMyGroups = (
  userId: string,
  onGroupsReceived: (groups: Group[]) => void,
) => {
  var subcription = firestore()
    .collection(groupsCollection)
    .where('participants', 'array-contains', userId)
    .onSnapshot(documentSnapshot => {
      const groups: Group[] = [];
      documentSnapshot.docs.forEach(document => {
        groups.push(document.data() as Group);
      });

      onGroupsReceived(groups);
    });

  return subcription;
};
