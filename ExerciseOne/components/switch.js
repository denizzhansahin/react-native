import { StyleSheet,Text,View,StatusBar,SafeAreaView ,TextInput
    ,Switch} from "react-native";
    
    import { useState } from "react";
    
    
    
    export default function App(){
      const [name,setName] = useState("")
      const [isDarkMode,setDarkMode] = useState(false)
      return (
        <SafeAreaView style={styles.container}>
          <TextInput style={styles.input} value={name}
          placeholder="deneme"
          onChangeText={setName}
          //secureTextEntry //güvenlik
          //keyboardType="numeric" //klavye tipi
          autoCorrect={false}
          autoCapitalize="none"
          />
          <Text style={styles.text}>My name is {name}</Text>
    
          <TextInput style={[styles.input, styles.multilineText]} placeholder="message" multiline/>
        
          <View style={styles.switchContainer}>
            <Text style={styles.text}>Dark</Text>
            <Switch value = {isDarkMode} 
            onValueChange={()=>setDarkMode((previous)=>!previous)}
            trackColor={{false : "#767577", true: "lightblue"}}
            thumbColor="#f4f3f4"/>
          </View>
        
        </SafeAreaView>
      )
    }
    
    const styles = StyleSheet.create({
      container : {
        flex:1,
        backgroundColor:"#fff",
        paddingTop: StatusBar.currentHeight
      },
      input:{
        height:40,
        margin:12,
        padding:10,
        borderWidth:1,
      },
      text:{
        fontSize:30,
        padding:10,
      },
      multilineText :{
        minHeight:100,
        textAlignVertical:"top",
      },
      switchContainer : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10,
      },
    })