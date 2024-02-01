import {View,Text,StyleSheet,SafeAreaView,Platform, Alert} from "react-native"
import CustomButton from "./components/CustomButton/CustomButton"

export default function App(){
  return (
    <SafeAreaView style={styles.safeAreContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Press me" onPress={()=>Alert.alert("Pressed","d")}/>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreContainer:{
    flex:1,
    backgroundColor:"plum",
  },
  container:{
    flex:1,
    backgroundColor:"plum",
    paddingTop : Platform.OS === 'android' ? 25:0,
  },
  box:{
    padding:20,
  },
  text:{
    ...Platform.select({
      ios:{color:"purple",fontSize:24,fontStyle:"italic"},
      android:{color:"blue",fontSize:30,},
    }),
    fontWeight:"bold",
    textAlign:"center",
  }
})