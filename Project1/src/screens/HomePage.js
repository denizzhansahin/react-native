import * as React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WebView } from 'react-native-webview';

function Anasayfa() {
  return (
    <WebView
        source={{ uri: 'https://bozok.edu.tr' }}
        style={{ marginTop: 20 }}
      />
  )
}

function OgrenciScreen() {
  return (
    <WebView
    source={{ uri: 'https://obs.bozok.edu.tr/' }}
    style={{ marginTop: 20 }}
  />

  
  )
}



function Bildirimler() {
  return (
    <WebView
    source={{ uri: 'https://bozok.edu.tr/duyurular/genel' }}
    style={{ marginTop: 20 }}
  />
    
  )
}



function Add() {
  return (
    <WebView
    source={{ uri: 'https://boysis.bozok.edu.tr/' }}
    style={{ marginTop: 20 }}
  />
  )
}

function HizmetlerScreen() {
  return (
    <WebView
    source={{ uri: 'https://bozok.edu.tr/ehizmetler' }}
    style={{ marginTop: 20 }}
  />




  )
}
const Tab = createBottomTabNavigator()


export default function HomePAge() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let mainButtonColor = 'red';

            if (route.name === 'Anasayfa') {
              return <Image source={require('../icon/anasayfa.png')} style={{ height: 30, width: 30 }} />
            } else if (route.name === 'Öğrenci') {
              return <Image source={require('../icon/ogrenci.png')} style={{ height: 30, width: 30 }} />
            } else if (route.name === 'Hizmetler') {
              return <Image source={require('../icon/hizmetler.png')} style={{ height: 30, width: 30 }} />
            }
            else if (route.name === 'BOYSİS') {
              color = 'white'
              size = 40

              if (focused) {
                mainButtonColor = 'rgb(0,0,255)'
              }

            }

            if (route.name === "BOYSİS") {
              // You can return any component that you like here!
              return (
                <View style={{
                  width: 80,
                  height: 65,
                  paddingLeft: 2,
                  paddingTop: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -8,
                  backgroundColor: mainButtonColor,
                  borderRadius: 100,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  }
                  ,
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 5

                }}>

                  <Image source={require('../icon/boysis.png')} style={{ height: 30, width: 30 }} />
                </View>
              );
            }
            else if (route.name === "Bildirimler") {
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -2 }}>
                  <View
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 5,
                      zIndex: 1,
                      width: 8,
                      height: 8,
                      borderRadius: 100,
                      backgroundColor: 'red',
                    }}
                  ></View>
                  <Image
                    source={require('../icon/bildirim.png')}
                    style={{ height: 30, width: 30 }} />
                </View>
              );
            }
            else {
              // You can return any component that you like here!
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -2 }}>
                </View>
              );
            }
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: true,
          tabBarStyle: {
            position: 'absolute'
            ,
            bottom: 30,
            left: 10,
            right: 10,
            borderRadius: 20,
            height: 70,
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 10

          }
        })}
      >
        <Tab.Screen name="Anasayfa" component={Anasayfa} options={{ title: 'Anasayfa' }} />
        <Tab.Screen name="Öğrenci" component={OgrenciScreen} options={{ title: 'Öğrenci' }} />
        <Tab.Screen name="BOYSİS" component={Add} options={{ title: 'BOYSİS' }} />
        <Tab.Screen name="Bildirimler" component={Bildirimler} options={{ title: 'Bildirimler' }} />
        <Tab.Screen name="Hizmetler" component={HizmetlerScreen} options={{ title: 'Hizmetler' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install  @react-navigation/bottom-tabs


/*

      <Tab.Navigator
        screenOptions={
          {
            headerShown:true
          }
        }
      >



              screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name === 'Home'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            }else if (route.name === 'Settings'){
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          }
        })}
*/


/*

function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Ekranı</Text>
    </View>
  )
}

*/