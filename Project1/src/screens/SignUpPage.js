import { StyleSheet, Text, View , SafeAreaView,Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomTextInput } from '../components'


const SignUpPage = ({navigation}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <SafeAreaView style={styles.continer}>


      <View style={styles.title}>

      <Image
        source={require('../../assest/images/login.jpg')}
        style={styles.image} />
      <Text style={styles.signUp}>Şifre Oluştur / Şifre Yenile</Text>

      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title={"Kimlik Numarası"}
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="TC Numarası veya Pasaport Numarası"
        />

        <CustomTextInput
          title={"Seri Numarası"}
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder="Kimli Seri Numarası"
        />

        <CustomTextInput
          title={"Yeni Şifre"}
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceholder="Yeni Şifrenizi Yazınız"
        />
      </View>

      <View style={styles.signUpOptions}>
        <CustomButton
        buttonText="Diğe Adıma Geç"
        setWidth="80%"
        buttonColor="red"
        pressedButtonColor="gray"
        handleOnPress={()=>console.log(name," ",email," ",password)}/>
      </View>

      <Pressable onPress={()=>navigation.navigate("Giriş Yap")}>
        <Text style={{fontWeight:'bold',paddingBottom:30}}>Bu işlemi iptal etmek için tıklayınız.</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
    color: 'gray'
  },
  title:{
    flex:2,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  textInputContainer:{
    flex:2,
    borderWidth:0,
    paddingVertical:20,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  signUpOptions:{
    flex:2,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:30,
  },
  image: {
    width: 100,
    height: 100 ,
    marginBottom: 20,
  },
})