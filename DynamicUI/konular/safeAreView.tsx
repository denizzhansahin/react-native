import {View,Text,StyleSheet,SafeAreaView} from "react-native"

export default function App(){
  return (
    <SafeAreaView style={styles.safeAreContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
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
  },
  box:{
    padding:20,
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
  }
})