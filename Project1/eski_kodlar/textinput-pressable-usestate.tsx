import { 
  StyleSheet, Text, View,
TextInput,Pressable } from 'react-native';

import React,{useState} from 'react';

export default function App() {

  const [name,setName] = useState("")
  const [lastName,setLastName] = useState("")
  const [result, setResult] = useState('')

  console.log(result)
  

  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text style={styles.yazi}>Name</Text>
      <TextInput
      placeholder='Enter Your Name'
      style={styles.textInputStyle}
      onChangeText={setName}
      value={name}
      />

      <Text style={styles.yazi}>Last Name</Text>
      <TextInput 
      placeholder='Enter Your Last Name'
      style={styles.textInputStyle}
      onChangeText={setLastName}
      value={lastName}
      />


      <Pressable
      onPress={()=>setResult(name + lastName)}
      style={({pressed})=>
        [styles.button,{
          backgroundColor: pressed ? "gray" : "blue"
        }]
      }
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  yazi:{color:'black'},
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    borderWidth:1,
    width:'80%',
    height:50,
    borderRadius:10,
    marginVertical:10,
    textAlign:'center',
    color:'blue',
    fontWeight:'bold'
  },
  button:{
    width:'80%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue'
  },
  buttonText:{
    fontWeight:'bold',
    color:'white'
  }
});


//keyboardType='numeric' , klavye tipi