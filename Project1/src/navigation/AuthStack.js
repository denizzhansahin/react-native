import React from 'react'
import { HomePage,LoginPage,ProfilePage, SignUpPage } from '../screens'

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'
      screenOptions={{headerShown:true}}>
      <Stack.Screen name="Giriş Yap" component={LoginPage}/>
      <Stack.Screen name="Şifre İşlemleri" component={SignUpPage}/>
    </Stack.Navigator>
  )
}

export default AuthStack

//screenOptions={{headerShown:true}} başlık gösterme
//initialRouteName='' başlangıç yapmak