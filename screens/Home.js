import { View, Text, ScrollView,StyleSheet,Image, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Home() {
    const scrollRef = useRef()
  return (
    <ScrollView ref={scrollRef}>
        <View>
        <Header />
        {/* <Image style={styles.img} source={require("../assets/banner.webp")} /> */}
        <ImageBackground style={styles.banner} source={require("../assets/banner.webp")} resizeMode="cover">
          {/* <Text styles={styles.textbanner}>aasdasdsd</Text> */}
        </ImageBackground>

        <Text style={styles.bold}>Good heath and well-being go hand in hand</Text>

        {/* <View style={styles.textOne}> */}

          <Text style={styles.textOne}>Every recipe in this site is reviewed by qualified nutritionists with your health and fitness goals in mind. No more counting calories, carbs or protein intake, we've got you covered.</Text>
          <Text style={styles.textOne}>Meals you can cook yourself! Our community bring you dishes that bridge the gap between functional meal-prep and the best dine-in experience.</Text>

        {/* </View> */}
        
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
    backgroundColor:"#32D",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  },
  img:{
    height:300,
    resizeMode:"contain",
    width:null
  },
  banner:{
    height:300
  },
  textOne:{
    padding:10
  },
  bold:{
    fontWeight:"bold",
    fontSize:22,
    textAlign:"center"
  }
})