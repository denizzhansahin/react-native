import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import GonderilerKullanici from './GonderilerKullanici';
import EtkinliklerKullanici from './EtkinliklerKullanici';

const Tab = createMaterialTopTabNavigator();


export default function ProfilMenu() {
    return (
        <View style={styles.View}>
            <View style={styles.ViewProfilHeader}>
                <View style={styles.ProfilImage}>
                    <Text style={styles.ProfilLogo}>Profil Logo</Text>
                </View>
                <View style={styles.Bilgi}>
                    <Text style={styles.İsimSoyad}>Profil İsim Soyad</Text>
                    <Text style={styles.KullaniciAdi}>Profil Kullanici Adi</Text>
                </View>
                <View style={styles.İcerikler}>
                    <Tab.Navigator>
                        <Tab.Screen name="Gönderiler" component={GonderilerKullanici} />
                        <Tab.Screen name="Etkinlikler" component={EtkinliklerKullanici} />
                    </Tab.Navigator>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        height: "100%",
        width: "100%",
        backgroundColor: "#6562E5",
    },
    ViewProfilHeader: {
        marginTop: 5,
        borderWidth: 1,
    },
    ProfilImage: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        height: 150,
    },
    ProfilLogo: {
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 90,
        height: 120,
        width: 120,
        borderWidth: 10,
        //borderColor:"#6562E5",
        borderColor: "red",
        color: "white",
        textAlign: "center",
        marginTop: 50,
    },
    Bilgi: {
        flexDirection: "column",
        width: "100%",
        marginTop: 15,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "orange",
    },
    İsimSoyad: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        width: "100%",
        textAlign: "center",
    },
    KullaniciAdi: {
        color: "white",
        width: "100%",
        textAlign: "center",
    },
    İcerikler: {
        height: "100%",
        width: "100%",
        borderWidth: 2,
        borderColor: "green",
    },
})
