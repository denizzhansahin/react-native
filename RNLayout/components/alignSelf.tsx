import { StyleSheet,View } from "react-native";
import Box from "./components/Box";

export default function App(){
  return (
    <View style={styles.container}>

    <Box style={{backgroundColor:"blue",alignSelf:"flex-start"}}>Deneme</Box>
    <Box style={{backgroundColor:"green",alignSelf:"flex-end"}}>Deneme</Box>
    <Box style={{backgroundColor:"red",alignSelf:"center"}}>Deneme</Box>
    <Box style={{backgroundColor:"yellow",alignSelf:"stretch"}}>Deneme</Box>
    <Box style={{backgroundColor:"green",alignSelf:"auto"}}>Deneme</Box>
    <Box style={{backgroundColor:"green",alignSelf:"auto"}}>Deneme</Box>
    <Box style={{backgroundColor:"green",alignSelf:"auto"}}>Deneme</Box>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    //flexDirection:"row",
    //alignItems:"baseline",
    alignSelf:"flex-end",    
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

/*
justifyContent:"flex-start", nereden başlayacağı
flex-end, center, space-between,space-araound,space-evenly
*/

/*align items


*/