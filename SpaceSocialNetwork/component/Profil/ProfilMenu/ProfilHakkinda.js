import { Image, StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function DenizhaSahin() {
  return (
    <WebView
     source={{uri:'https://www.denizhansahin.com'}}
     style={styles.WebView}/>
  )
}


export default function ProfilHakkinda() {
  const [modalAktif, setModalAktif] = useState(false)

  return (
    <>
    <ScrollView style={styles.View}>
      <View style={styles.Header}>
        <Image style={styles.Logo} source={require("../../../logo/logo.png")}/>
        <Text style={styles.Name}>Space Social Network</Text>
      </View>
      <View style={styles.Aciklama}>
        <Text>
          Her bir internet kullanıcısının kendi ilgi ve alanları içinde farklı türde içerikler paylaşabileceği bir platforma hoşgeldiniz!
          Her bir kullancımız için yeni içerikler keşfedebileceği, çeşitli kategorilerdeki içerikler ile bilgilenebileceği, sosyal hayatlarına fayda sağlayabilecek hizmetlere ulaşabileceği
          bir platform hayal ettik ve kodlamaya başladık!
          Hedefimiz sadece sosyal medya olmak değil bir sosyal ağ olmaktır! Kullanıcılarımıza günlük hayatlarında sunmayı hedeflediğimiz ve sunduğumuz hizmetler ile sosyal ağ oluşturmayı planlamaktayız.
          Kullanıcılarımız istedikleri içerikleri oluşturup paylaşabilirken çeşitli hizmetleri çok rahat bir şekilde günlük hayatlarında kullanabilmesi en önemli hedefimizdir. Uygulamamızı kullancığınız için teşekkür ederiz!
        </Text>
      </View>
      <View style={styles.Gelistirici}>
        <Text style={styles.GelistiriciAciklama}>Geliştirici ile Tanışın!</Text>
        <Text style={styles.Denizhan}>Denizhan Şahin</Text>
        <Pressable style={styles.ButtonView} onPress={() => setModalAktif(true)}>
          <Text style={styles.ButtonText}>Benimle Tanış!</Text>
        </Pressable>
      </View>
    </ScrollView >
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
          <DenizhaSahin/>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  Header: {
    flexDirection: "column",
  },
  Logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    paddingBottom: 100,
    margin:10,
  },
  Name: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  Aciklama: {
    width: "95%",
    alignSelf: "center",
    marginTop: 5,
  },
  Gelistirici: {
    margin: 10,
  },
  GelistiriciAciklama: {
    alignSelf: "center",
    fontWeight: "900",
    fontSize: 20,
    marginTop: 2,
  },
  Denizhan: {
    alignSelf: "center",
    fontWeight: "900",
    fontSize: 30,
    marginTop: 5,
    color: "#6562E5",
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
  WebView:{
    width:"100%",
    height:"95%",
  },

})