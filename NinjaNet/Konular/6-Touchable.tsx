import {
    StyleSheet, Text, View, ScrollView, FlatList
    , TouchableOpacity//dokunabilirlik
  } from 'react-native'
  import React, { useState } from 'react'
  
  const App = () => {
    const [people, setPeople] = useState([
      { name: 'Denizhan', key: '1' },
      { name: 'Deniz', key: '2' },
      { name: 'Denizhan', key: '3' },
      { name: 'Denizhan', key: '4' },
      { name: 'Denizhan', key: '5' },
      { name: 'Denizhan', key: '6' },
      { name: 'Denizhan', key: '7' },
    ])
  
  
    const pressHandler = (id) => {
      console.log(id)
      setPeople((prevPeople)=> {
        return prevPeople.filter(person=> person.key != id)
      })
    }
  
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.name}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
  
            </TouchableOpacity>
          )}
        />
      </View>
    )
  
  }
  
  export default App
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
      marginHorizontal: 10,
      //marginTop:24,
    },
  })