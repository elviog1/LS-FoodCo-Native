import { View, Text, ScrollView,StyleSheet,Image, ImageBackground,TextInput } from 'react-native'
import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CardBox from '../Components/CardBox'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home() {
    const scrollRef = useRef()
    const navigation =useNavigation()
  return (
    <ScrollView ref={scrollRef}>
        <View>
        <Header />
        {/* <Image style={styles.img} source={require("../assets/banner.webp")} /> */}
        <ImageBackground style={styles.bannerwelcome} source={require("../assets/banner.webp")}  resizeMode="cover">
        </ImageBackground>

        <View style={styles.buttonBox}>
            <Text style={styles.recipesButton} onPress={()=>navigation.navigate("Recipes")}>Check recipes</Text>
        </View>
        <Text style={styles.bold}>HEALTHY EATING DONT'T HAVE TO BE A STRUGGLE</Text>
        

        <View style={styles.textoneBox}>
        <Text style={styles.text}>Good heath and well-being go hand in hand</Text>
          <Text style={styles.textOne}>Every recipe in this site is reviewed by qualified nutritionists with your health and fitness goals in mind. No more counting calories, carbs or protein intake, we've got you covered.</Text>
          <Text style={styles.textOne}>Meals you can cook yourself! Our community bring you dishes that bridge the gap between functional meal-prep and the best dine-in experience.</Text>
        </View>

        <ImageBackground style={styles.banner} source={require("../assets/banner2.jpg")} resizeMode="cover">
        </ImageBackground>
        <View >
          <Text style={styles.textBox2}>Free up your time</Text>
          <Text style={styles.textDescription}>Thinking about the ideal meal is time-consuming. We carefully keep our website delivering only the best, top quality and balanced recipes, with an outstanding food shipping system, so you can get back to the things that matter.</Text>
        </View>

        <ImageBackground style={styles.banner} source={require("../assets/banner3.webp")} resizeMode="cover">
        </ImageBackground>
        <Text style={styles.textBox2}>Always fresh</Text>
        <Text style={styles.textDescription}>Our ingredients are sourced directly from farm and market. Packed, chilled and delivered to you the next day.</Text>

        <ImageBackground style={styles.banner} source={require("../assets/banner4.jpg")} resizeMode="cover">
        </ImageBackground>
        <Text style={styles.textBox2}>Zero to landfill</Text>
        <Text style={styles.textDescription}>All our packaging is recyclable or re-useable and we operate a no-waste policy in our store.</Text>
        {/* <CardBox /> */}
        <Footer />
        </View>
        <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  goTop:{
    color: "white",
    fontSize: 25,
    paddingVertical:20,
    backgroundColor:"#a7bb92",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  },
  banner:{
    height:300,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",

  },
  bannerwelcome:{
    height:300,
    // marginTop:30,
    alignItems:"center",
    justifyContent:"center",
    opacity:.7,
  },
  textBox2:{
    backgroundColor:"#f9e972",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center"
  },
  textOne:{
    paddingHorizontal:20,
    paddingVertical:10,
    fontSize:22
  },
  textoneBox:{
    marginTop:-70
  },
  textDescription:{
    padding:20,
    backgroundColor:"#f9e972",
    fontSize:22
  },
  bold:{
    fontWeight:"bold",
    fontSize:35,
    textAlign:"center",
    position:"relative",
    bottom:320,
    width:"100%",
    textShadowColor:"black",
    textShadowOffset: {width:4,height:4},
    textShadowRadius: 1,
    color:"white"

  },
  text:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:30,
    position:"absolute",
    // bottom:60
    top:-95,
    paddingHorizontal:20
  },
  recipesButton:{
    backgroundColor:"#f9e972",
    fontSize:22,
    width:180,
    paddingVertical:10,
    textAlign:"center",
    alignSelf:"center",
    position:"relative",
    borderWidth:2,
    borderRadius:9,
    bottom:100,
    borderColor:"#a7bb92",

    textShadowColor:"white",
    textShadowOffset: {width:2,height:2},
    textShadowRadius: 1,
    fontWeight:"bold"

  }
})