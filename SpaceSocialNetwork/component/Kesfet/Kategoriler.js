import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Kategoriler() {
    const [kategoriler, setKategoriler] = useState([
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
        { kategroiAdi: "Spor", kategoriLogo: "Logo", kategoriId: 1 },
    ])
    return (
        <View style={styles.View}>
            <FlatList
                horizontal
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
    View:{
        height:100,
        width:"100%",
        borderWidth:1,
    },
    FlastListOge: {
        height: 80,
        width: 80,
        backgroundColor: "orange",
        borderRadius: 10,
        marginRight:5
    },
})