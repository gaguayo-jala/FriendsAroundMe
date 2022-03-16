import User from './user';

export default interface Group {
  id: string | number,
  name: string;
  participants?: User[];
}
