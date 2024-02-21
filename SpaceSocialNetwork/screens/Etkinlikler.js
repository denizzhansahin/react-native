import { FlatList, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import EtkinlikCard from '../component/EtkinlikCard'

export default function Etkinlikler() {
    const [etkinlikler, setEtkinlikler] = useState([
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
        { etinlikZaman: "11/2024", etkinlikKonum: "Yozgat/Boğazlıyan",etkinlikIsim:"Etkinlik101"},
    ])
    return (
        <View style={styles.View}>
            <FlatList
            //horizontal
            numColumns={2}
            keyExtractor={(item)=>item.etinlikZaman}
                style={styles.FlatList}
                data={etkinlikler}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.TouchableOpacity}>
                        <EtkinlikCard data={item}/>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex:1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#6562E5",
        //borderWidth:5,
    },
    Text: {
        alignSelf: "center",
    },
    FlatList:{
        //borderWidth:1,
        //borderColor:"green",
        alignSelf:"center",
        width:"95%",
        alignContent:"center",
        borderColor:"white",
    },
    TouchableOpacity:{
        //borderWidth:5,
        alignSelf:"center",
        alignItems:"center"
    }
})