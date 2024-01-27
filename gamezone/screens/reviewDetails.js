import { StyleSheet, Text, View, Button , Image} from 'react-native'
import React from 'react'
import Card from '../shared/card'
import {globalStyles, images } from '../styles/global'

export default function reviewDetails({ navigation, route}) {

  const pressHandler = () => {
    navigation.goBack()
  }

  const name = "Deneme"
  console.log(navigation)

  const icon = "icon"
  return (
    <>
      <View style={styles.container}>
        <Card>
        <Text>ReviewDetails Screen</Text>
        <Button title='back to home screen' onPress={pressHandler} />
        <Text>{route.params.title}, {route.params.rating}, {route.params.body}, {route.params.key}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating : </Text>
          <Image source={require('../assets/icon.png')}/>
          <Image source={images.ratings['1']}/>
          <Image source={require('../assets/' + icon+ '.png')}/>
        </View>
        </Card>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})