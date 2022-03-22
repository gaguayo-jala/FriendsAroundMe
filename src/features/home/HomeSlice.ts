import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '~store/index';

export type HomeState = {
  chats: any[];
};

const initialState: HomeState = {
  chats: [],
};

export const homeSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;

export const selectAllGroups = (state: RootState) => state.groups.groups;
