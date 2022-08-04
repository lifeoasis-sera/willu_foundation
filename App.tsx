import React from 'react';
import {SignUpNavigation} from './src/navigations';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SignUpNavigation />
    </Provider>
  );
};

export default App;
