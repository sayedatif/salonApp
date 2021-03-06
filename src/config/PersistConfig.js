import immutablePersistenceTransform from './../utils/persist/ImmutablePersistenceTransform';
import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['login'], // reducer keys that you do NOT want stored to persistence here
    whitelist: [], // OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
    transforms: [immutablePersistenceTransform]
  }
};

export default REDUX_PERSIST;
