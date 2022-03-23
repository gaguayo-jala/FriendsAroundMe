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

// const initialState: MyGroupsState = {
//   groups: [],
// };

export const getAllGroups = createAsyncThunk(
  'groups/getAllGroupsApi',
  GetAllGroups,
);

export const myGroupsSlice = createSlice({
  name: 'groups',
  initialState: myGroupsAdapter.getInitialState(),
  // initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<Group>) => {
      // state.groups.push(action.payload);
      myGroupsAdapter.addOne(state, action.payload);
    },
    removeAllGroups: state => {
      // state.groups = [];
      myGroupsAdapter.removeAll(state);
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      //state.groups = [...state.groups, ...action.payload];
      myGroupsAdapter.addMany(state, action.payload);
    });
    builder.addCase(getAllGroups.rejected, state => {
      console.error('Error');
    });
  },
});

export default myGroupsSlice.reducer;

export const {addGroup, removeAllGroups} = myGroupsSlice.actions;

const groupsSelectors = myGroupsAdapter.getSelectors<RootState>(
  state => state.groups,
);

export const selectAllGroups = groupsSelectors.selectAll;

// export const selectAllGroups = (state: RootState) => state.groups.groups;