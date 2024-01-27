import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

import {createAppContainer} from 'react-navigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const UserStack = () => {
  return (
    
    <Stack.Navigator initialRouteName='Home Menu' screenOptions={{headerShown:true,headerStyle:{backgroundColor:'red'}}}>
      <Stack.Screen name="Home" component={Home} options={{headerTitle:()=><Header/>}}/>
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={
        {
          title:'ReviewDetails2',
          headerStyle:{backgroundColor:'blue',height:60},
        }
        }/>
    </Stack.Navigator>
    
  )
}

export default UserStack

