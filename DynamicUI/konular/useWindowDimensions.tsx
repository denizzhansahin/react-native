
import { StyleSheet,View, Text, useWindowDimensions} from "react-native";

export default function App(){


const windowsWidth = useWindowDimensions().width
const windowHeight = useWindowDimensions().height

  return (
    <View style={styles.container}>
      <View style={[styles.box, {width : windowsWidth > 500 ? "70%" : "90%",height:windowHeight > 600 ? "60%" : "90%"}]}>
        <Text style={{fontSize:windowsWidth > 500 ? 50 : 24}}>Welcome!</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"plum",
    alignItems:"center",
    justifyContent:"center",
  },
  box:{
    //width: windowsWidth > 500 ? "70%" : "90%",
    //height:windowHeight > 600 ? "60%" : "90%",
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize : 24,
  }
})