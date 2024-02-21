import { StyleSheet, Text, View , TouchableOpacity , FlatList} from 'react-native'
import React , {useState} from 'react'

export default function IlgiCekebilecek() {
    const [ilgi, setIlgi] = useState([
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
                data={ilgi}
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
        height: 90,
        width: 150,
        backgroundColor: "orange",
        borderRadius: 10,
        marginRight:5
    },
})