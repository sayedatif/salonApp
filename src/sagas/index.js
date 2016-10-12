import { takeLatest } from 'redux-saga';

/* ------------- Types ------------- */

import { types as rootTypes } from '../store/root';

/* ------------- Sagas ------------- */

import { rootSaga } from './root';

/* ------------- Connect Types To Sagas ------------- */

export default function* createSagas() {
  yield [
    // some sagas only receive an action
    takeLatest(rootTypes.LOAD_INIT, rootSaga),
  ];
}
