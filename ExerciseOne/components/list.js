import { StyleSheet,Text,View,ScrollView ,SafeAreaView,StatusBar,
FlatList} from "react-native";
import pokemonList from "./data.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={pokemonList}
        renderItem={({item})=>{
            return (
                <View style={styles.card} key={item.id}>
                    <Text style={styles.cardText}>{item.type}</Text>
                    <Text style={styles.cardText}>{item.name}</Text>
                </View>
            )
        }}
        keyExtractor={(item,index) => item.id.toString()}
        ItemSeparatorComponent={<View style={{height:16}}/>}
        ListEmptyComponent={<Text>Nı items found</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        //horizontal
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#f5f5f5',
    paddingTop : StatusBar.currentHeight,
  },
  scrollView : {
    paddingHorizontal:16,
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    //marginBottom:16,
    borderWidth:1
  },
  cardText : {
    fontSize:30,
  },
  headerText:{
    fontSize:24,
    textAlign:"center",
    marginBottom:12,
  },
  footerText:{
    fontSize:24,
    textAlign:"center",
    marginTop:12,
  }
})