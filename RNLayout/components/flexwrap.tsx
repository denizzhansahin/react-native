import { StyleSheet,View } from "react-native";
import Box from "./components/Box";

export default function App(){
  return (
    <View style={styles.container}>

    <Box style={{backgroundColor:"blue",}}>Deneme1</Box>
    <Box style={{backgroundColor:"green",}}>Deneme2</Box>
    <Box style={{backgroundColor:"red",}}>Deneme3</Box>
    <Box style={{backgroundColor:"yellow",}}>Deneme4</Box>
    <Box style={{backgroundColor:"green",}}>Deneme5</Box>
    <Box style={{backgroundColor:"red",}}>Deneme6</Box>
    <Box style={{backgroundColor:"yellow",}}>Deneme7</Box>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
   // flex:1,
    //flexDirection:"row",
    //alignItems:"baseline",
    //alignSelf:"flex-end",    
    flexWrap:"wrap",
    height:300,
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