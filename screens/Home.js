import { View, Text, ScrollView,StyleSheet,Image, ImageBackground,TextInput } from 'react-native'
import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Home() {
    const scrollRef = useRef()

    // const screenHeight = Dimensions.get('window').height;
    // const screenWidth = Dimensions.get('window').width;

    // const BackgroundBanner = ()=>{
    //   return (
    //     <View>
    //       <ImageBackground style={styles.banner} source={require("../assets/banner.webp")} resizeMode="cover">
    //       <Text styles={styles.textbanner}>aasdasdsdAA</Text>
    //     </ImageBackground>
    //     </View>
    //   )
    // }
  return (
    <ScrollView ref={scrollRef}>
        <View>
        <Header />
        {/* <Image style={styles.img} source={require("../assets/banner.webp")} /> */}
        <ImageBackground style={styles.banner} source={require("../assets/banner.webp")}  resizeMode="cover">
        </ImageBackground>

        <Text style={styles.bold}>Good heath and well-being go hand in hand</Text>
        <Text style={styles.textOne}>Every recipe in this site is reviewed by qualified nutritionists with your health and fitness goals in mind. No more counting calories, carbs or protein intake, we've got you covered.</Text>
        <Text style={styles.textOne}>Meals you can cook yourself! Our community bring you dishes that bridge the gap between functional meal-prep and the best dine-in experience.</Text>

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
  // img:{
  //   height:screenHeight,
  //   resizeMode:"contain",
  //   width:screenWidth
  // },
  banner:{
    height:300,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",

  },
  // textbanner:{
  //   backgroundColor:"red",
  //   width:100,
  //   height:100,
  //   margin: 12,
  //   borderWidth: 2,
  //   padding: 10,
  // },
  textBox2:{
    backgroundColor:"#f9e972",
    fontWeight:"bold",
    fontSize:22,
    textAlign:"center"
  },
  textOne:{
    padding:20
  },
  textDescription:{
    padding:20,
    backgroundColor:"#f9e972"
  },
  bold:{
    fontWeight:"bold",
    fontSize:22,
    textAlign:"center"
  },
  text:{
    textAlign:"center",
    justifyContent:"center",
    display:"flex",
  },
  
})