import { Text, View , StyleSheet, ActivityIndicator, Pressable} from 'react-native'
import React, { Component } from 'react'

const Loading = ({name,changeIsLoading}) => {
    return (
      <View style={styles.container}>

        <Pressable style={[{},styles.closeButtonContainer]}
        onPress={()=>changeIsLoading()}>
        <Text style={styles.closeButton}>X</Text>
        </Pressable>
        
        <ActivityIndicator size={'large'} color={'white'}/>
        <Text style={styles.loginText}>{name} Yükleniyor...</Text>
      </View>
    )
  
}

export default Loading;

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'red',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
    ,
    loginText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginTop:20,
    },
    closeButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    closeButtonContainer:{
        backgroundColor:'black',
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:'center',
        position:'absolute',
        top:50,
        right:30,
    }
})