import Group from '~models/group';

type RootStackParamList = {
  home: undefined;
  login: undefined;
  myGroups: undefined;
  myGroup: {
    group: Group;
  };
};

export default RootStackParamList;
