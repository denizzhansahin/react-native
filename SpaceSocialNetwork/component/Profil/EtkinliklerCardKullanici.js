import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EtkinliklerCardKullanici(props) {
    return (

        <View style={styles.EtkinlikCardView}>
            <View style={styles.EtkinlikCardHeader}>
                <Text style={styles.EtkinlikZaman}>{props.data.etinlikZaman}</Text>
                <Text style={styles.EtkinlikKonum}>{props.data.etkinlikKonum}</Text>
            </View>
            <Text style={styles.EtkinlikIsim}>{props.data.etkinlikIsim}</Text>
            <Text style={styles.EtkinlikAyrinti}>{props.data.etkinlikIsim}</Text>
            {
            //console.log(props.data.etkinlikIsim)
            }
        </View>

    )
}

const styles = StyleSheet.create({

    EtkinlikCardView: {
        backgroundColor: "white",
        color: "black",
        width: 150,
        height: 200,
        //borderWidth:5,
        //borderColor:"green",
        margin: 10,
        alignItems: "center",
        alignContent: "center",
        borderRadius:10,
    },
    EtkinlikCardHeader: {
        flexDirection: "column",
        width: "100%",
    }
    ,
    EtkinlikZaman: {
        color: "black",
        fontSize: 10,
        alignSelf: "flex-start",
        borderWidth: 1
    },
    EtkinlikKonum: {
        color: "black",
        fontSize: 10,
        borderWidth: 1,
        alignSelf: "flex-start",
    },
    EtkinlikIsim: {
        borderWidth: 1,
        alignSelf: "center",
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        marginBottom:10,
    },
    EtkinlikAyrinti: {
        borderWidth: 1,
        alignSelf: "flex-start",
        fontSize:10,
    }
})