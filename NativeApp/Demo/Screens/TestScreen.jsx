import { Text,Button,View,StyleSheet,Image,Dimensions, FlatList,SafeAreaView, ScrollView } from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import wallet from "../assets/Icons/wallet.png"

export default function TestScreen()
{


    
    
    return(
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.box1}>
            
            <View style={styles.t1}><Text style={{'fontSize':18,color:"black"}}>Debit</Text></View>
            <View style={styles.t2}><Text style={{'fontSize':28,color:"black"}}>R$ 2000</Text></View>
            <View style={styles.t3}><Text style={{'fontSize':10,color:"black"}}>1 april ,2023</Text></View>
          </View>
          <View style={styles.box2}>
            <Image style={styles.img} source={require("../assets/Icons/wallet.png")} />
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  img:{
    resizeMode:"contain"
  },
  container:{
    width:"80%%",
    display:"flex",
    flexDirection:"row",
    // backgroundColor:"green",
    justifyContent:"space-between",
    padding:10,
    height:windowHeight*.15,
    margin:10,
    borderRadius:10,

  },
  box1:{
    flex:5,
    // backgroundColor:"white",
    display:"flex",
    flexDirection:"column"
  },
  box2:{
    flex:1,
    // backgroundColor:"blue"
  },
  t1:{
    flex:2,
    // backgroundColor:"red",
    justifyContent:"space-around",
    
  },
  t2:{
    flex:4,
    // backgroundColor:"yellow",
    justifyContent:"flex-end",
    fontSize:18
  },
  t3:{
    flex:2,
    // backgroundColor:"brown"
  }



})