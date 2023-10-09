/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {MainNavitation} from 'src/navigation';
import {store, persistor} from 'src/store';

const App: FunctionComponent<JSX.Element> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <MainNavitation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
