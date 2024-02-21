import { StyleSheet, Text, View, Modal, Button, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Gonderiler from './Gonderiler';
import Etkinlikler from './Etkinlikler';
import Kesfet from './Kesfet';
import Profil from './Profil';
import IcerikPaylasma from '../component/IcerikPaylasma/IcerikPaylasma';
import { NavigationContainer } from '@react-navigation/native';


function Deneme1({ navigation }) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Deneme</Text>
    </View>
  )
}


const Anasayfa = () => {
  const [modalAktif, setModalAktif] = useState(false)


  return (
    <>
      <Pressable onPress={() => setModalAktif(true)}
        style={styles.Button}
      >
        <MaterialCommunityIcons name="card-plus"
          color={"white"} size={60}
          alignSelf={"center"} marginTop={3}
        />
      </Pressable>


      <Tab.Navigator
        activeColor="#6562E5"
        inactiveColor='gray'
        barStyle={{ backgroundColor: 'white' }}
        screenListeners={{
          state: (e) => {
            // Do something with the state
            //console.log('state changed', e.data);
            //console.log(modalAktif)
            //console.log(e.data.state.index)

            if (e.data.state.index == 2) {
              //Alert.alert("Merhaba")
              //setModalAktif(true)
              //console.log(modalAktif)
            }

          },
        }}

      >
        <Tab.Screen name="Gönderiler" component={Gonderiler}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="post-outline" color={color} size={25} />
            ),

          }} />
        <Tab.Screen name="Etkinlikler" component={Etkinlikler}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={25} />
            ),
          }} />
        <Tab.Screen name="  "
          //Paylaş kısmı
          component={Deneme1}
          options={{

            /*tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="share-all" size={25} />
            ),*/
            //tabBarButton: () => console.log("denizhan deneme")
            //tabBarLabel:false
          }}
        />
        <Tab.Screen name="Keşfet" component={Kesfet}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="layers" color={color} size={25} />
            ),
          }} />

        <Tab.Screen name="Profil" component={Profil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={25} />
            ),
            //tabBarLabel:false
          }}
        />
      </Tab.Navigator>

      <Modal style={{ height: 100 }} visible={modalAktif}
        onRequestClose={() => setModalAktif(false)}
        animationType='slide'
        presentationStyle='overFullScreen'
        transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalViewHeader}>
            <MaterialCommunityIcons name='arrow-collapse' onPress={() => setModalAktif(false)} title="Kapat" color="black" borderRadius={0} size={30} borderWidth={0}
              width="10%" alignSelf="flex-end"
            />
          </View>
          <View style={styles.IcerikPaylasma}>
            <NavigationContainer independent={true}>
            <IcerikPaylasma />
            </NavigationContainer>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Anasayfa

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#6562E5"
  },
  modalView: {
    height: "100%",
    width: "100%",
    //justifyContent: "center",
    //alignContent: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#6562E5",
    backgroundColor: "#eeeee4",
    marginTop: "15%",
  },
  modalViewHeader: {
    marginRight: 15,
    marginTop: 15,
    height: "auto",
    width: "auto",
  },
  IcerikPaylasma: {
    width: "100%",
    height: "100%",
  },
  Text: {
    alignSelf: "center",
  },/*
  PressableButton:{
    width:50,
    height:50,
    justifyContent:"center",
    borderRadius:2,
    backgroundColor:"red",
    alignSelf:"center",
  },*/
  Button: {
    position: 'absolute',
    zIndex: 99,
    bottom: 5,
    alignSelf: 'center',
    shadowColor: 'black',
    backgroundColor: "#6562E5",
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderRadius: 25,
    height: 70,
    width: 70,

  }
})



/*

function Deneme1({ navigation }) {

  const [modalAktif, setModalAktif] = useState(false)

  useEffect(() => {
    const deger = navigation.addListener("tabPress", (e) => {
      e.preventDefault()
      //Alert.alert("Merhaba")
      setModalAktif(true)
    })

  })
  return (

    <Modal style={{ height: 100 }} visible={modalAktif} onRequestClose={() => setModalAktif(false)} animationType='slide' presentationStyle='overFullScreen'>
      <View style={styles.modalView}>
        <Button onPress={() => setModalAktif(false)} title="Kapat" color="red" />
      </View>
    </Modal>

  )
}

*/