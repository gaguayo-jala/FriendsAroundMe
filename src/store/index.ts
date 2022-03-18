import {createStore} from 'redux';

const defaultState = {
  groups: [],
};

const defaultReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(defaultReducer);

export default store;
