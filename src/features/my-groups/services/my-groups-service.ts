import Group from '~models/group';

export const GetAllGroups = (): Promise<Group[]> => {
  const fakeGroups: Group[] = [
    {
      id: 1,
      name: 'Friends',
      participants: [],
    },
    {
      id: 2,
      name: 'Collegues',
      participants: [],
    },
    {
      id: 3,
      name: 'Travelers',
    },
    {
      id: 4,
      name: 'Drinkers',
    },
    {
      id: 5,
      name: 'Friends 2',
      participants: [],
    },
    {
      id: 6,
      name: 'Collegues 2',
      participants: [],
    },
    {
      id: 7,
      name: 'Travelers 2',
    },
    {
      id: 8,
      name: 'Drinkers 3',
    },
    {
      id: 1,
      name: 'Friends Modified',
      participants: [],
    },
    {
      id: 2,
      name: 'Collegues',
      participants: [],
    },
    {
      id: 3,
      name: 'Travelers',
    },
    {
      id: 4,
      name: 'Drinkers',
    },
    {
      id: 5,
      name: 'Friends 2',
      participants: [],
    },
    {
      id: 6,
      name: 'Collegues 2',
      participants: [],
    },
    {
      id: 7,
      name: 'Travelers 2',
    },
    {
      id: 8,
      name: 'Drinkers 3',
    },
  ];

  return Promise.resolve(fakeGroups);
};
