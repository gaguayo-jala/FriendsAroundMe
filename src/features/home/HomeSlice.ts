import {createSlice} from '@reduxjs/toolkit';

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
