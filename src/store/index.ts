import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import myGroupsReducer from '~features/my-groups/MyGroupsSlice';
import homeReducer from '~features/home/HomeSlice';

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  console.log('DEV Flippper');
  const flipperDebugger = require('redux-flipper').default;
  middlewares.push(flipperDebugger());
}

const store = configureStore({
  reducer: {
    groups: myGroupsReducer,
    home: homeReducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
