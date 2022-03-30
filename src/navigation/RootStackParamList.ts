import Group from '~models/group';

type RootStackParamList = {
  home: undefined;
  login: undefined;
  myGroups: undefined;
  myGroup: {
    group: Group;
  };
  contacts: undefined;
};

export default RootStackParamList;
