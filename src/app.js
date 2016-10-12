import React from 'react';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import applyConfigSettings from './config';

// Apply config overrides
applyConfigSettings();
// create our store
const store = configureStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
