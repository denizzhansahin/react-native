import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'


export default function Kampanyalar() {
    const [gonderiler, setGonderiler] = useState([
        { kullaniciAdi: 'denizzhansahin', gonderiMetni: "Merhaba bu bir gönderi", zaman: '11/01/2024' },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba bu bir gönderi", zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba bu bir gönderi", zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba bu bir gönderi", zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba bu bir gönderi", zaman: '12/01/2024'
        },])

    return (
        <View style={styles.View}>
            <FlatList
                horizontal
                data={gonderiler}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        {
                            //console.log(item)
                        }
                        <View style={styles.FlastListOge}>
                            <View style={styles.cardViewHeader}>
                                <Text style={styles.kullaniciAdi}>{item.kullaniciAdi}</Text>
                                <Text style={styles.zaman}>{item.zaman}</Text>
                            </View>

                            <Text style={styles.gonderiMetni}>{item.gonderiMetni}</Text>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        height: 150,
        width: "100%",
        borderWidth: 1,
        },
    FlastListOge: {
        height: 150,
        width: 200,
        backgroundColor: "orange",
        borderRadius: 10,
        marginRight: 10
    },
    cardViewHeader: {
        flexDirection: "column"
    },
    kullaniciAdi: {
        fontWeight: "bold",
        borderWidth: 1,
        alignSelf:"flex-start"
    },
    zaman: {
        alignSelf: "flex-end",
        borderWidth: 1,
        alignSelf:"flex-start",
        textAlign: "center",
    },
    gonderiMetni: {
        alignContent: "center",
        borderWidth: 1,
    },
})