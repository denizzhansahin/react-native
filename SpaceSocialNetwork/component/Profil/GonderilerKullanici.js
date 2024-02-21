import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import GonderiCardKullanici from './GonderiCardKullanici'

export default function GonderilerKullanici() {
    const [gonderiler, setGonderiler] = useState([
        { kullaniciAdi: 'denizzhansahin', gonderiMetni: "Merhaba bu bir gönderi", zaman: '11/01/2024' },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },
        {
            kullaniciAdi: 'denizhan434',
            gonderiMetni: "Merhaba nasılsın qıuwebf fqwebfq wfehqwklbef qwefhqwef hjewf jhqwe jqw kebvkelwbv ejhlrv jwel rvjelrbwhvwje rfjhlebwrfjhlebwrfj erjhfwje rfjwe rfjhew rfl hjwewejlrfhb wjelbrfhjelrwh fjwe fjhlbewr fj werjhlbfwehrlf wjerfbjher wfjhebrwfhj ",
            zaman: '12/01/2024'
        },

    ]
    )
  return (
    <View style={styles.View}>
    <FlatList
        style={styles.FlatList}
        data={gonderiler}
        renderItem={({ item }) => (
            <TouchableOpacity>
                <GonderiCardKullanici data={item} />
            </TouchableOpacity>
        )}
    />
</View>
  )
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#6562E5",
        height:"100%",
        //borderWidth:5,
    },
    Text: {
        alignSelf: "center",
    },
    FlatList: {
        borderWidth: 0,
        //borderColor:"green",
    }
})