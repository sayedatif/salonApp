import { fromJS } from 'immutable';

// TYPES
export const types = {
  LOAD_INIT: 'app/App/LOAD_INIT',
  LOAD_INIT_SUCCESS: 'app/App/LOAD_INIT_SUCCESS',
  LOAD_INIT_ERROR: 'app/App/LOAD_INIT_ERROR',
};

// INITIAL STATE
export const initialState = fromJS({
  loading: false,
  error: false,
  init: fromJS({}),
});

// REDUCER
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_INIT:
      return state
        .set('loading', true)
        .set('error', false);
    case types.LOAD_INIT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('init', fromJS(action.data));
    case types.LOAD_INIT_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

// ACTIONS
export const actions = {
  loadInit: () => ({ type: types.LOAD_INIT }),
  initLoaded: (data) => ({ type: types.LOAD_INIT_SUCCESS, data }),
  initLoadingError: (error) => ({ type: types.LOAD_INIT_ERROR, error })
};
