import { StyleSheet,View, Text, Dimensions } from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowsWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"plum",
    alignItems:"center",
    justifyContent:"center",
  },
  box:{
    width: windowsWidth > 500 ? "70%" : "90%",
    height:windowHeight > 600 ? "60%" : "90%",
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize : 24,
  }
})