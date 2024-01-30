import {View, StatusBar, ActivityIndicator} from "react-native"

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"red", padding:60}}>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" color="blue"/>
      <ActivityIndicator size="large" color="green" animating={false}/>
      <ActivityIndicator size="large" color="green" animating={true}/> 
    </View>
  )
}

/*
hidden : gizlemek için
barStyle: uygulamanın bar için stili, gözüken değerler için, dark-content, light-content, default
*/