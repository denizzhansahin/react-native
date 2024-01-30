import {View, StatusBar} from "react-native"

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"red", padding:60}}>
      <StatusBar backgroundColor="lightgreen" barStyle="default" hidden />
    </View>
  )
}

/*
hidden : gizlemek için
barStyle: uygulamanın bar için stili, gözüken değerler için, dark-content, light-content, default
*/