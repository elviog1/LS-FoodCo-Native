import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './Navigation/drawer';

export default function App() {
  return (
    <NavigationContainer>
    <Drawer />
    </NavigationContainer>
  );
}

