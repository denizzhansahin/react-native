import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function ProfilCikis() {
  return (
    <View style={styles.View}>
      <View style={styles.View2}>
        <Text style={styles.Text}>Çıkış Yapmak İstiyor Musunuz?</Text>
      </View>
      <View style={styles.View2}>
        <Pressable style={styles.ButtonView} onPress={() => setModalAktif(true)}>
          <Text style={styles.ButtonText}>Benimle Tanış!</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
  },
  Text: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 25,
  },
  ButtonView: {
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6562E5',
    marginTop: 20,
    width: "80%",
    alignSelf: "center"
  },
  ButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  View2:{
    height:"50%",
    width:"95%",
    alignSelf:"center",
  },
})