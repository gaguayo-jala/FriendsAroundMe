import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import {GetAllGroups} from './services/my-groups-service';
import Group from '~models/group';

export type MyGroupsState = {
  groups: Group[];
};

const initialState: MyGroupsState = {
  groups: [],
};

export const getAllGroups = createAsyncThunk(
  'groups/getAllGroupsApi',
  GetAllGroups,
);

export const myGroupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<Group>) => {
      // state.groups = [];
      state.groups = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.groups = [...state.groups, ...action.payload];
    });
    builder.addCase(getAllGroups.rejected, state => {
      console.error('Error');
    });
  },
});

export default myGroupsSlice.reducer;

export const {addGroup} = myGroupsSlice.actions;
