import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GonderiPaylasma from './GonderiPaylasma';
import EtkinlikPaylasma from './EtkinlikPaylasma';
const Tab = createMaterialTopTabNavigator();


export default function IcerikPaylasma() {
  return (
    <View style={styles.View}>
        <Tab.Navigator>
          <Tab.Screen name="Gönderi" component={GonderiPaylasma} />
          <Tab.Screen name="Etkinlik" component={EtkinlikPaylasma} />
        </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
  },
})