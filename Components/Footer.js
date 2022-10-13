import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.socialtext}>Our Social Media</Text>
      <View style={styles.social}>
        <Image style={styles.img} source={require("../assets/ig.png")} />
        <Image style={styles.img} source={require("../assets/wp.png")} />
        <Image style={styles.img} source={require("../assets/fb.png")} />
        <Image style={styles.img} source={require("../assets/tg.png")} />
        <Image style={styles.img} source={require("../assets/yt.png")} />
      </View>
      <Text>©2022 LS Food Co</Text>
      <View>
        <Image style={styles.logo} source={require("../assets/mostachon.png")} />
        <Text>Terms / About Us</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"center",
        // backgroundColor:"#a7bb92",
    },
    img:{
        width:40,
        height:40,
        marginHorizontal:5,
    },
    logo:{
        width:90,
        height:90,
    },
    social:{
        display:"flex",
        flexDirection:"row",
        marginVertical:25
    },
    socialtext:{
      marginTop:20
    }
    
})