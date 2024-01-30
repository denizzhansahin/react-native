import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  )
}

export default App


//npm install --save react-native-webview