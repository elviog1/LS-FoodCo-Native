import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder='example@gmail.com'/>
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/>
      <Button style={styles.signIn} title='Sign in'></Button>
    </View>
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
    }
})