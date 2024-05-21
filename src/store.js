import { createStore, combineReducers } from 'redux';

const initialState = {
  post: [],
  searchterm: '',
  filter: 'all',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST': {
      return {
        ...state,
        post: action.payload,
      };
    }
    case 'SET_SEARCHTERM': {
      return {
        ...state,
        searchterm: action.payload,
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(rootReducer);

export default store;
