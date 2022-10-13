import { View, Text,StyleSheet,Button } from 'react-native'
import React, { useRef } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useSigninMutation } from '../Features/usersAPI'

export default function Login() {
  const scrollRef = useRef()
  const[signIn] = useSigninMutation()
  
  return (
    <ScrollView ref={scrollRef}>

    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder='example@gmail.com'/>
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/>
      <Button style={styles.signIn} title='Sign in'></Button>
      <Footer />
    <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"center",
    },
    input:{
        backgroundColor:"#AAA",
        paddingVertical:15,
        width: 300,
        marginVertical:8
    },
    signIn:{
        marginTop:10
    },
    title:{
        fontSize:40
    },
    goTop:{
      color: "white",
      fontSize: 25,
      paddingVertical:20,
      backgroundColor:"#32D",
      width: "100%",
      textAlign: "center",
      fontWeight: "bold"
    },
})