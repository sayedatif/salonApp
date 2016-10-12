import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import PersistConfig from './../config/PersistConfig';
import { actions as rootActions } from './root';

const updateReducers = (store) => {
  const reducerVersion = PersistConfig.reducerVersion;
  const config = PersistConfig.storeConfig;
  const init = () => store.dispatch(rootActions.loadInit());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      console.tron.display({
        name: 'PURGE',
        value: {
          'Old Version:': localVersion,
          'New Version:': reducerVersion
        },
        preview: 'Reducer Version Change Detected',
        important: true
      });
      // Purge store
      persistStore(store, config, init).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    } else {
      persistStore(store, config, init);
    }
  }).catch(() => {
    persistStore(store, config, init);
    AsyncStorage.setItem('reducerVersion', reducerVersion);
  });
};

export default { updateReducers };
