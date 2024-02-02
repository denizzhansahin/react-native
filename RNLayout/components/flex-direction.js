import { StyleSheet,View } from "react-native";
import Box from "./components/Box";

export default function App(){
  return (
    <View style={styles.container}>

    <Box style={{backgroundColor:"blue",}}>Deneme</Box>
    <Box style={{backgroundColor:"green",}}>Deneme</Box>
    {/*    <Box style={{backgroundColor:"blue"}}>Deneme</Box>
    <Box style={{backgroundColor:"blue"}}>Deneme</Box>
    <Box style={{backgroundColor:"blue"}}>Deneme</Box> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:"row-reverse",
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

//flex-direction ile konumlandırma yapılır

/*
    flexDirection:"column", yukarıdan aşağı
        flexDirection:"column-reverse",aşağıdan yukarı
        flexDirection:"row", soldan sağa
        flexDirection:"row-reverse", sağdan sola
*/