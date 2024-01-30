import React, { useState } from 'react'
import {View,Button,Text,Modal} from "react-native"

export default function App() {
  const [isModalVisible,setModalVisible] = useState(false)
  return (
    <View style={{flex:1,backgroundColor:"plum",padding:60}}>
      <Button title="Press"
      onPress={()=>setModalVisible(true)}/>
      <Modal visible={isModalVisible} onRequestClose={()=>setModalVisible(false)}
      animationType='slide'
      presentationStyle='pageSheet'>
        <View style={{flex:1,backgroundColor:"lightblue",padding:60}}>
          <Text>Modal content</Text>
          <Button title='Close' color="red" onPress={()=>setModalVisible(false)}/>
        </View>
      </Modal>
    </View>
  )
}

/*
presentationStyle : sayfa kaplama alanı
*/