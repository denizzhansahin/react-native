import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function GonderiCard(props) {
  return (
    <>
      <View style={styles.View}>
        <View style={styles.cardView}>
          <View style={styles.cardViewHeader}>
            <Text style={styles.kullaniciAdi}>{props.data.kullaniciAdi}</Text>
            <Text style={styles.zaman}>{props.data.zaman}</Text>
          </View>

          <Text style={styles.gonderiMetni}>{props.data.gonderiMetni}</Text>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  View: {
    paddingBottom: 10
  },
  cardView: {
    backgroundColor: "white",
    color: "black",
    width: "95%",
    height: "auto",
    paddingBottom: 10,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
  },
  cardViewHeader:{
    flexDirection:"row"
  },
  kullaniciAdi: {
    fontWeight: "bold",
    borderWidth: 1,
    flex:2
  },
  gonderiMetni: {
    alignContent: "center",
    borderWidth: 1,
  },
  zaman: {
    alignSelf: "flex-end",
    borderWidth: 1,
    flex:1,
    textAlign:"center",
  },

})