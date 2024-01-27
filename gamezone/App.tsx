import React from 'react'
import UserStack from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (

    <NavigationContainer>
      <UserStack />
    </NavigationContainer>

  )
}

