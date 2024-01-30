import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Test Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    //backgroundColor : 'black',
    width:'60%',
    height:200,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    borderWidth:5,
    borderColor:'blue'
  },
  textStyle:{
    color:"white",
    fontWeight:'bold'
  }
});
