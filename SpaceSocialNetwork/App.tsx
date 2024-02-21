import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KontrolGiris from "./navigation/Stack-Baslangic";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{height:"100%",width:"100%"}}>
      <KontrolGiris />
    </View>


  )
}

const style = StyleSheet.create({

})

