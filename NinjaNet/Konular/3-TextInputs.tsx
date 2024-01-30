import { StyleSheet, Text, View , Button, TextInput} from 'react-native'
import React , {useState} from 'react'

const App = () => {
  const [name,setName] = useState('Denizhan');
  const [age, setAge] = useState('30')

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. Denizhan Sahin'
        onChangeText={(val)=> setName(val)}
        multiline
        
      />

      <Text>Enter age:</Text>
      <TextInput style={styles.input}
      keyboardType='numeric'
        placeholder='e.g. 15'
        onChangeText={(val)=> setAge(val)}
      />
      <Text>name: {name}, age:{age}</Text>
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
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
})