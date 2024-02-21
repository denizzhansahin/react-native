import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

function DenizhaSahin() {
  return (
    <WebView
     source={{uri:'https://form.jotform.com/240443028932957'}}
     style={styles.WebView}/>
  )
}

export default function ProfilIletisim() {
  return (
    <View style={styles.View}>
      <DenizhaSahin/>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
    },
    WebView:{
      height:"100%",
      width:"100%",
    },
})