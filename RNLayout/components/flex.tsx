import { StyleSheet,View } from "react-native";
import Box from "./components/Box";

export default function App(){
  return (
    <View style={styles.container}>

    <Box style={{backgroundColor:"blue",flex:1}}>Deneme</Box>
    <Box style={{backgroundColor:"green",flex:3}}>Deneme</Box>
    <Box style={{backgroundColor:"blue"}}>Deneme</Box>
    <Box style={{backgroundColor:"blue"}}>Deneme</Box>
    <Box style={{backgroundColor:"blue"}}>Deneme</Box>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    marginTop : 64,
    borderWidth:6,
    borderColor:"red",
  },
})

//flex : 1 ise tüm alanı kaplar
//          <View style={{backgroundColor:"red",flex:1}}></View>

/*
    <View style={styles.container}>
      <Box style={{backgroundColor:"blue"}}>Deneme</Box>
      <Box style={{backgroundColor:"green"}}>Deneme</Box>
      <Box style={{backgroundColor:"blue"}}>Deneme</Box>
      <Box style={{backgroundColor:"blue"}}>Deneme</Box>
      <Box style={{backgroundColor:"blue"}}>Deneme</Box>
    </View>
*/