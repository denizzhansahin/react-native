import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView, 
  Modal, Image, TouchableWithoutFeedback , Keyboard} from 'react-native'
import React, { useState } from 'react'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'
import ReviewForm from './reviewForm'


export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'Deneme', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Deneme1', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Deneme2', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

  const pressHandler = () => {
    navigation.navigate('ReviewDetails', reviews)
  }

  const addReview = (reiview) => {
    reiview.key = Math.random().toExponential.toString()
    setReviews((currentReviews) => {
      return [reiview,...currentReviews]
    })
   setModalOpen(false)
  }

  return (
    <>
      <View style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Image style={
                  {
                    ...styles.modalToggle, ...styles.modalClose
                  }

              } source={images.ratings['1']} />
            </TouchableOpacity>
            <Text>Hello from the modal </Text>
            <ReviewForm addReview={addReview}/>
          </View>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableOpacity onPress={() => (setModalOpen(true))}>
          <Image style={styles.modalToggle} source={images.ratings['1']} />
        </TouchableOpacity>


        <Text>ReviewDetails Screen</Text>
        <Button title='deneme' onPress={pressHandler} />
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>{item.title}</Text>
              {console.log(item)}
              <Button title={item.title} onPress={() => navigation.navigate('ReviewDetails', item)} />
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />

        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </>

  )
}


const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  modalContent:{
    flex:1,
  }
})

//      <Button title='go to review dets' onPress={pressHandler}/>



//https://reactnavigation.org/docs/getting-started/

//npm installl react-navigation

//npm install react-navigate-gesture-handler react-native-renimated

//npm install react-navigation-stack

//npm install formik

//npm install yup