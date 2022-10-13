import { View, Text,StyleSheet,Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useSigninMutation, useSignoutMutation } from '../Features/usersAPI'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login() {
  const [mail,setMail] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)
  const [user,setUser] = useState()
  const scrollRef = useRef()

  const [signIn] = useSigninMutation()
  const [useSignOUT] = useSignoutMutation()

  const signOUT = ()=>{
    useSignOUT(userID.id)
    setLogged(!logged)
    // Alert.alert(`Logged out successfully`)
  }

  const setData = async (value)=>{
    try{
      await  AsyncStorage.setItem('user',JSON.stringify(value))
    }catch(error){
      console.log(error)
    }
  }
  const getData = async ()=>{
    try{
      await AsyncStorage.getItem('user').then(value =>setUser(value))
    }catch(error){
      console.log(error)
    }
  }
  const handleSubmit = async ()=>{
    let user = {
      mail : mail,
      password : password
    }

    let {data,error} = await signIn(user)
    if(error){
      // Alert.alert(
      //   "try again"
      // )
      console.log(error)
    }else{
      setData(data.response.user)
      console.log(data)
      await getData()
      // Alert.alert(`Welcome ${data.response.user.name}`)
    }
    setLogged(!logged)
  }
  const [userID,setUserID] = useState("")
  useEffect(()=>{
    AsyncStorage.getItem("user").then(user =>setUserID(JSON.parse(user)))

  },[])
  
  return (
    <ScrollView ref={scrollRef}>
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder='example@gmail.com'/>
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/>
      <Button style={styles.signIn} title='Sign in' onPress={handleSubmit}></Button>
      <Button style={styles.signIn} title='Sign out' onPress={signOUT}></Button>
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