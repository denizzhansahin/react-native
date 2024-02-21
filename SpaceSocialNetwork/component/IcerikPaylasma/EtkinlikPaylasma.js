import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { TextInput } from 'react-native-paper';


export default function EtkinlikPaylasma() {
  const [baslik, setBaslik] = useState("")
  const [konum, setKonum] = useState("")
  const [tarih, setTarih] = useState("")
  const [aciklama, setAciklama] = useState("")
  const [tur, setTur] = React.useState("");
  const data = [
    { key: '1', value: 'Gönderi Türü Seçiniz', disabled: true },
    { key: '2', value: 'Gündem' },
    { key: '3', value: 'Bireysel Hayat/Günlük Aktivite' },
    { key: '4', value: 'Siyaset' },
    { key: '5', value: 'Spor' },
    { key: '6', value: 'Eğlence' },
    { key: '7', value: 'Haber' },
    { key: '8', value: 'Ekonomi' },
    { key: '9', value: 'Hobiler' },
  ]
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Etkinlik Türü Seçiniz</Text>
      <SelectList
        setSelected={(val) => setTur(val)}
        data={data}
        save="value"
        //onSelect={() => alert(selected)} 
        label="Kategoriler için Tıklayınız"
      />
      <Text style={styles.Text}>Etkinlik Adı Yazınız</Text>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={50}
        style={styles.TextInput}
        onChangeText={setBaslik}
        placeholder='Buraya yazınız'
        placeholderTextColor={"#6562E5"}
      />
      <Text style={styles.Text}>Etkinlik Konumunu Yazınız</Text>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={50}
        style={styles.TextInput}
        onChangeText={setKonum}
        placeholder='Buraya yazınız'
        placeholderTextColor={"#6562E5"}
      />
      <Text style={styles.Text}>Etkinlik Tarihini Belirtiniz</Text>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={10}
        style={styles.TextInput}
        onChangeText={setTarih}
        placeholder='Buraya yazınız'
        placeholderTextColor={"#6562E5"}
      />
      <Text style={styles.Text}>Etkinlik Açıklamasını Yazınız</Text>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={50}
        style={styles.TextInput}
        onChangeText={setBaslik}
        placeholder='Buraya yazınız'
        placeholderTextColor={"#6562E5"}
      />
      <Pressable style={styles.ButtonView} onPress={() => Alert.alert("Seçilen Tür : " + tur, baslik)}>
        <Text style={styles.ButtonText}>Paylaş</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    height: "100%",
    width: "95%",
    alignSelf: "center",
    flexDirection: "column",
  },
  Text: {
    fontWeight: "bold",
    color: "#6562E5",
    marginTop: "2%",
    marginBottom: "2%",
  },
  TextInput: {
    borderRadius: 10,
    borderColor: "#6562E5",
    borderWidth: 2,
  },
  ButtonView: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6562E5',
    marginTop: 20,
    width: "100%",
    alignSelf: "center"
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  ButtonView: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6562E5',
    marginTop: 20,
    width: "100%",
    alignSelf: "center"
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
})