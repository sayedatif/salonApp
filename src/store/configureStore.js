/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import R from 'ramda';

import DebugSettings from '../config';
import PersistConfig from '../config/PersistConfig';
import RehydrationServices from './RehydrationServices';

import createReducer from './createReducer';
import createSagas from '../sagas';


// creates the store
export default function configureStore(initialState = {}) {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = DebugSettings.reduxLogging;
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    });
    middleware.push(logger);
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (PersistConfig.active) {
    enhancers.push(autoRehydrate());
  }

  const store = createStore(
    createReducer(),
    compose(...enhancers)
  );

  // configure persistStore and check reducer version number
  if (PersistConfig.active) {
    RehydrationServices.updateReducers(store);
  }

  // kick off root saga
  sagaMiddleware.run(createSagas);

  return store;
}
