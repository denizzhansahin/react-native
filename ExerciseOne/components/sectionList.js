import { StyleSheet,Text,View,ScrollView ,SafeAreaView,StatusBar, SectionList} from "react-native";
import pokemonList from "./data.json"
import groupedPokemonList from "./grouped-data.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
      <SectionList 
        sections={groupedPokemonList}
        renderItem={({item})=>{
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        ItemSeparatorComponent={()=><View style={{height:16}}/>}
        SectionSeparatorComponent={()=><View style={{height:16}}/>}
        renderSectionHeader={({section})=>
      <Text style={styles.sectionHeaderText}>{section.type}</Text>}
      
      />
      </View>
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
    marginBottom:16,
    borderWidth:1
  },
  cardText : {
    fontSize:30,
  },
  sectionHeaderText:{
    backgroundColor:"white",
    fontSize:24,
    fontWeight:"bold",
  },
})