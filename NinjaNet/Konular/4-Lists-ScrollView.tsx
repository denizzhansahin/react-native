import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React , {useState} from 'react'

const App = () => {
  const [peopler,setPeople]= useState([
    {name:'Denizhan',key:'1'},
    {name:'Deniz',key:'2'},
    {name:'Denizhan',key:'3'},
    {name:'Denizhan',key:'4'},
    {name:'Denizhan',key:'5'},
    {name:'Denizhan',key:'6'},
    {name:'Denizhan',key:'7'},
  ])
  return (
    <ScrollView>
    <View style={styles.container}>
      {peopler.map(item=>{
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
    </View>
  
    </ScrollView>
  )

}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:40,
    paddingHorizontal:20,
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
  },
})