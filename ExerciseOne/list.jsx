import { Platform, SafeAreaView, ScrollView, StyleSheet,View } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {


  const charmanderData = {
    name:"Charmander",
    image: require("./assets/charmander.png"),
    type:"Fire",
    hp:39,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"],
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...charmanderData}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#f5f5f5',
    paddingTop : Platform.OS === "android" ? 25 : 0,
  }
})