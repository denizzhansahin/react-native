

import 'react-native-gesture-handler'


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import ProfilMenu from '../component/Profil/ProfilMenu';
import ProfilAyarlar from '../component/Profil/ProfilMenu/ProfilAyarlar';
import ProfilIletisim from '../component/Profil/ProfilMenu/ProfilIletisim';
import ProfilHizmetKosullar from '../component/Profil/ProfilMenu/ProfilHizmetKosullar';
import ProfilHakkinda from '../component/Profil/ProfilMenu/ProfilHakkinda';
import ProfilCikis from '../component/Profil/ProfilMenu/ProfilCikis';


const Deneme = () => {
    return (
        <View>
            <Text>Deneme</Text>
        </View>
    )
}

export default function Profil() {
    return (
        <View style={styles.View}>
            <NavigationContainer independent={true}>
            <Drawer.Navigator>
                <Drawer.Screen name="Profil" component={ProfilMenu} />
                <Drawer.Screen name="Ayarlar" component={ProfilAyarlar} />
                <Drawer.Screen name="İletişim" component={ProfilIletisim} />
                <Drawer.Screen name="Hizmet Koşulları ve Diğer" component={ProfilHizmetKosullar} />
                <Drawer.Screen name="Hakkında" component={ProfilHakkinda} />
                <Drawer.Screen name="Çıkış" component={ProfilCikis} />
            </Drawer.Navigator>
        </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        height:"100%",
        width:"100%",
    },
})









