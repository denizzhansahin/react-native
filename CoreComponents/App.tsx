import { StyleSheet, View } from 'react-native'
import React from 'react'
import Greet from './components/Greets'

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"red", padding:60}}>
      <Greet name="Denizhan"/>
      <Greet name="Şahin"/>
    </View>
  )
}

const styles = StyleSheet.create({})