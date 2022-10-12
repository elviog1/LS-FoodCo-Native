import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './Navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './Features/store';
import LayoutWeb from './Layout/LayoutWeb';


export default function App() {
  return (
    <NavigationContainer>

      {/* <LayoutWeb> */}

      <Provider store={store}>
    <Drawer />
      </Provider>

      {/* </LayoutWeb> */}
    </NavigationContainer>
  );
}

