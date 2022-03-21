import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Group from '~models/group';

export type MyGroupsState = {
  groups: Group[];
};

const initialState: MyGroupsState = {
  groups: [
    {
      id: 1,
      name: 'Group 1',
    },
    {
      id: 2,
      name: 'Group 2',
    },
  ],
};

export const myGroupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<Group>) => {
      state.groups.push(action.payload);
    },
  },
});

export default myGroupsSlice.reducer;

export const {addGroup} = myGroupsSlice.actions;
