import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function KisaYollar() {
    const [kategoriler, setKategoriler] = useState([
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
    ])
    return (
        <View style={styles.View}>
            <FlatList
                style={{alignSelf:"center"}}
                numColumns={4} 
                data={kategoriler}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        {
                            //console.log(item)
                        }
                        <View style={styles.FlastListOge}>
                            <Text>Deneme</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        height: "auto",
        width: "100%",
        borderWidth: 1,
        borderColor:"red",
    },
    FlastListOge: {
        height: 80,
        width: 80,
        backgroundColor: "orange",
        borderRadius: 10,
        marginRight: 5,
        marginTop:5
    },
})