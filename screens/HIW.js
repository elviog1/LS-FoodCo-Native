import { View, Text,StyleSheet,Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function HIW() {

  const [click,setClick] = useState(false)

  



  return (
    <ScrollView>
    <View>
      <Text style={styles.title}>How it works?</Text>
      <View style={styles.imgBox}>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../assets/hiw1.webp')} />
          <Text style={styles.number}>1</Text>
          <Text style={styles.textBox}>Choose recipes</Text>
          <Text style={styles.textBox}>Build your first box of 2-5 recipes. Choose from 1-4 people boxes</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../assets/hiw2.jpg')} />
          <Text style={styles.number}>2</Text>
          <Text style={styles.textBox}>Pick your first delivery</Text>
          <Text style={styles.textBox}>Pre-portioned, ethically sourced ingredients, delivered for free</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../assets/hiw3.jpg')} />
          <Text style={styles.number}>3</Text>
          <Text style={styles.textBox}>Enjoy</Text>
          <Text style={styles.textBox}>Easy to follow recipes with meals on the table in as little as 10 mins</Text>
        </View>

        <Text style={styles.title}>Try out our mobile app!</Text>
        <Text style={styles.title}>(Available for android and ios)</Text>
          
        <ImageBackground style={styles.banner} source={require("../assets/phone.png")} resizeMode="cover">
        </ImageBackground>

        <Text style={styles.title}>Why Choose <Text style={styles.title.col}>Us?</Text></Text>
        <Text style={styles.textBox}>Our recipes allow you to hit your nutritional and fitness goals, without sacrificing the great flavours and vibrancy that come from a freshly prepared meal.</Text>

        <View style={styles.box.choose}>
          <Text style={styles.textBox2}>TOP QUALITY AND TASTE</Text>
          <Text style={styles.textBox2}>Focusing on quality, LS Food brings only the best products, made with prime ingredients that are selected with care.</Text>
        </View>
        <View style={styles.box.choose}>
          <Text style={styles.textBox2}>FOOD SAFETY</Text>
          <Text style={styles.textBox2}>Our ambition is to safeguard the health of our customers. All of our providers are certified according to International Food Standards.</Text>
        </View>
        <View style={styles.box.choose}>
          <Text style={styles.textBox2}>EASY DELIVERIES</Text>
          <Text style={styles.textBox2}>Our logistic team is ready to offer a flexible delivery service, in order to ensure the products arrive in optimal conditions.</Text>
        </View>
        <View style={styles.box.choose}>
          <Text style={styles.textBox2}>INNOVATIVE AND AWARDED</Text>
          <Text style={styles.textBox2}>In order to propose new culinary experiences, our staff continuosly create unique recipes and concepts.</Text>
        </View>
        
        <View>
          <Text style={styles.title}>Frequently Asked Questions</Text>

            <Text  style={styles.textBox2}>1. What's in the box?</Text>
              <Text style={styles.textBox2}>All the pre-portioned ingredients to cook the delicious, healthy recipes you've chosen - all our meat is free-range and ethically sourced from small farms, fresh fish is sustainably caught and our vegetables are cultivated in the most natural way possible.</Text>
            <Text style={styles.textBox2}>2. How does delivery work?</Text>
            <Text style={styles.textBox2}>We offer free delivery nationwide. On day of delivery, you'll get a text with an eta but you don't need to be in to receive your box. Our insulated boxes will be keep everything fresh for up to 48 hours and your box will be left in your designated safe place.</Text>
            <Text style={styles.textBox2}>3. Do you offer a guarantee?</Text>
            <Text style={styles.textBox2}>If you're not entirely happy, we offer 100% money-back guarantee.</Text>
            
        </View>

      </View>
    </View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
  banner:{
    height:300,
    marginTop:30
  },
  title:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:30,
    marginVertical:20,
    col:{
      color:"red"
    },
  },
  img:{
    width:320,
    height:320,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:"center",
    marginTop:40,
    borderColor:"#f9e972",
    borderWidth:3
  },
  textBox:{
    textAlign:"center",
    fontSize:20,
  },
  textBox2:{
    textAlign:"center",
    fontSize:17,
    paddingHorizontal:30,
    backgroundColor:"#f9e972",
    width:"100%",
  },
  box:{
    alignItems:"center",
    choose:{
      marginVertical:30
    }
  },
  number:{
    width:80,
    height:80,
    backgroundColor:"#f9e972",
    borderRadius:50,
    position:"relative",
    bottom:60,
    textAlign:"center",
    // fontWeight:"bold",
    fontSize:50
  },
  
})