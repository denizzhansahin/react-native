// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Sign from '../screens/Sign';
import Anasayfa from '../screens/Anasayfa';


const Stack = createNativeStackNavigator();

function KontrolGiris() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Giriş" component={Login} />
        <Stack.Screen name="Kayıt" component={Sign} options={{headerShown:true}} />
        <Stack.Screen name="Anasayfa" component={Anasayfa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default KontrolGiris;