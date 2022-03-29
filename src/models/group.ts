import User from './user';

export default interface Group {
  id: string | number;
  name: string;
  owner: string;
  participants?: string[];
  roles: {[id: string]: 'owner' | 'invited'};
}
