import { StyleSheet, Text, View , Button} from 'react-native'
import React , {useState} from 'react'

const App = () => {
  const [name,setName] = useState('Denizhan');
  const [person, setPerson] = useState({name:'deniz',age:1})

  const clickHandler = () => {
    setName('Denizhan Şahin')
    setPerson({name:'denizhan', age:2})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
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
  buttonContainer:{
    marginTop:20,
  },
})