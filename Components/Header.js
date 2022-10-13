import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>LS FOOD CO</Text>
        <Image style={styles.img} source={require('../assets/squidly.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        paddingTop:10,
        // backgroundColor:"#a7bb92",
    },
    img:{
        maxWidth:150,
        height:150,
    },
    title:{
        marginBottom:-10,
        fontSize:40
    }
})