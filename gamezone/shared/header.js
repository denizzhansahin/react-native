import React from "react";
import { StyleSheet, Text, View, Image , ImageBackground, Modal} from "react-native";


export default function Header() {
    return (
        <ImageBackground source={require('../assets/icon.png')} style={styles.header}>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/icon.png')}/>
                <Text style={styles.headerText}>Gamezone</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    }
})