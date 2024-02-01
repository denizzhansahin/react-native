import * as React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
    </View>
  )
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Settings Screen</Text>
    </View>
  )
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SearchScreen Screen</Text>
    </View>
  )
}

function Bildirimler() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bildirimler Ekranı</Text>
    </View>
  )
}



function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Ekranı</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string | undefined;
            let mainButtonColor = 'black';

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            else if (route.name === 'Add') {
              color = 'white'
              size = 40

              if (focused) {
                //color = 'white'
                mainButtonColor = 'rgb(0,122,255)'
              }

              iconName = focused ? 'finger-print' : 'finger-print';
            }
            else if (route.name === 'Bildirimler') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            if (route.name === "Add") {
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

                  <Image
                    source={require('./src/icon/home.png')}
                    style={{ height: 30, width: 30 }} />
                </View>
              );
            }
            else if (route.name==="Bildirimler"){
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -2 }}>
                  <View
                    style={{
                      position:'absolute',
                      top:10,
                      right:5,
                      zIndex:1,
                      width:8,
                      height:8,
                      borderRadius:100,
                      backgroundColor:'red',
                    }}
                  ></View>
                  <Image
                    source={require('./src/icon/home.png')}
                    style={{ height: 30, width: 30 }} />
                </View>
              );
            }
            else {
              // You can return any component that you like here!
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -2 }}>
                  <View
                    style={{
                      position:'absolute',
                      top:10,
                      right:5,
                      zIndex:1,
                      width:8,
                      height:8,
                      borderRadius:100,
                      backgroundColor:'red',
                    }}
                  ></View>
                  <Image
                    source={require('./src/icon/home.png')}
                    style={{ height: 30, width: 30 }} />
                </View>
              );
            }
          },
          tabBarActiveTintColor: 'blue',
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
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
        <Tab.Screen name="Add" component={Add} options={{ title: 'Add' }} />
        <Tab.Screen name="Bildirimler" component={Bildirimler} options={{ title: 'Bildirimler' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
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


