import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {GetAllGroups} from './services/my-groups-service';
import Group from '~models/group';
import {RootState} from '~store/index';

export type MyGroupsState = {
  groups: Group[];
};

const myGroupsAdapter = createEntityAdapter<Group>({
  selectId: group => group.id,
});

export const getAllGroups = createAsyncThunk(
  'groups/getAllGroupsApi',
  GetAllGroups,
);

export const myGroupsSlice = createSlice({
  name: 'groups',
  initialState: myGroupsAdapter.getInitialState(),
  reducers: {
    addGroup: (state, action: PayloadAction<Group>) => {
      myGroupsAdapter.addOne(state, action.payload);
    },
    addGroups: (state, action: PayloadAction<Group[]>) => {
      // myGroupsAdapter.removeAll();
      myGroupsAdapter.setAll(state, action.payload);
    },
    removeAllGroups: state => {
      myGroupsAdapter.removeAll(state);
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      myGroupsAdapter.addMany(state, action.payload);
    });
  },
});

export default myGroupsSlice.reducer;

export const {addGroup, removeAllGroups, addGroups} = myGroupsSlice.actions;

const groupsSelectors = myGroupsAdapter.getSelectors<RootState>(
  state => state.groups,
);

export const selectAllGroups = groupsSelectors.selectAll;
