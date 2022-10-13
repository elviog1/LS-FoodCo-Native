import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './Navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './Features/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
    <Drawer />
      </Provider>
    </NavigationContainer>
  );
}

