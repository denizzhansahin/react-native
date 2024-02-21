import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

/*
import Kategoriler from '../component/Kategoriler'
import IlgiCekebilecek from '../component/İlgiCekebilecek'
import EditorSecilenler from '../component/EditorSecilenler'
import Gundem from '../component/Gundem'
import Kampanyalar from '../component/Kampanyalar'
import KisaYollar from '../component/KisaYollar'

*/



import Kategoriler from '../component/Kesfet/Kategoriler'
import IlgiCekebilecek from '../component/Kesfet/İlgiCekebilecek'
import EditorSecilenler from '../component/Kesfet/EditorSecilenler'
import Gundem from '../component/Gundem'
import Kampanyalar from '../component/Kesfet/Kampanyalar'
import KisaYollar from '../component/Kesfet/KisaYollar'

export default function Kesfet() {
    return (
        <ScrollView style={styles.View}>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>Kategoriler</Text>
                <Kategoriler/>
            </View>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>İlgini Çekebilecek</Text>
                <IlgiCekebilecek/>
            </View>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>Editör Tarafından Seçilenler</Text>
                <EditorSecilenler/>
            </View>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>Gündem</Text>
                <Gundem/>
            </View>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>Kampanyalar</Text>
                <Kampanyalar/>
            </View>
            <View style={styles.Alanlar}>
                <Text style={styles.AlanBaslik}>Kısa Yollar</Text>
                <KisaYollar/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: "#6562E5",
        height: "100%",
        width: "100%",
    },
    Alanlar:{
        flexDirection:"column",
        marginBottom:10,
        marginTop:5,
    },
    AlanBaslik:{
        color:"white",
        fontWeight:"bold",
        fontSize:25,
    },
})