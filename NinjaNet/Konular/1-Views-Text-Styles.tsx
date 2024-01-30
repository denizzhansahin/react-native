import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello world</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Loream ipsum</Text>
        <Text>Loream ipsum</Text>
        <Text>Loream ipsum</Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    fontWeight:'bold',
  },
})