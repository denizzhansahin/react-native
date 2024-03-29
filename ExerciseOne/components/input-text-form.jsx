import { StyleSheet,Text,View,StatusBar,SafeAreaView ,TextInput} from "react-native";

import { useState } from "react";



export default function App(){
  const [name,setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name}
      placeholder="deneme"
      onChangeText={setName}
      //secureTextEntry //güvenlik
      //keyboardType="numeric" //klavye tipi
      autoCorrect={false}
      autoCapitalize="none"
      />
      <Text style={styles.text}>My name is {name}</Text>

      <TextInput style={[styles.input, styles.multilineText]} placeholder="message" multiline/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#fff",
    paddingTop: StatusBar.currentHeight
  },
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1,
  },
  text:{
    fontSize:30,
    padding:10,
  },
  multilineText :{
    minHeight:100,
    textAlignVertical:"top",
  },
})