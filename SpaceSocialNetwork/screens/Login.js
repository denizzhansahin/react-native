import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar backgroundColor="#6562E5" barStyle="default" />
      <View style={styles.LogoView}>
        <Image source={require("../logo/logo.png")} style={styles.Logo} />
      </View>
      <View style={styles.FormView}>
        <Text style={styles.textBaslik}>Hoş Geldiniz</Text>
        <TextInput placeholder="E-Posta Adresi Yazınız" style={styles.textInput} keyboardType="email-address" />
        <TextInput placeholder="Şifre Yazınız" style={styles.textInput} secureTextEntry />
      </View>
      <Pressable style={styles.ButtonView} onPress={()=>navigation.navigate("Anasayfa")}>
        <Text style={styles.ButtonText}>Giriş Yap</Text>
      </Pressable>
      <Pressable style={styles.AltView} onPress={()=>navigation.navigate("Kayıt")}>
        <Text style={styles.textAlt}>Veya Hesap <Text style={{ color: "#6562E5" }}>Oluşturunuz</Text></Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    paddingTop: StatusBar.currentHeight,
    height: "100%",
    width: "auto"
  },
  textBaslik: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 15,
  },
  textAlt: {
    fontSize: 15,
    alignSelf: "center",
    marginTop: "18%"
  },
  LogoView: {
    height: "40%",
    marginTop: "10%"
  },
  Logo: {
    height: 200,
    width: 200,
    alignSelf: "center",
    paddingBottom: 100
  },
  FormView: {
    height: "30%"
  },
  AltView: {
    height: "20%"
  },
  ButtonView: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6562E5',
    marginTop: 20,
    width: "50%",
    alignSelf: "center"
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    borderRadius: 10,
    borderColor: "#6562E5",
    borderWidth: 1,
    backgroundColor: "#ffff",
    margin: 5,
    alignSelf: "center",
    width: "80%",
    color: "#6562E5",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
})

