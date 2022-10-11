import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.contact}>Contact</Text>
      <Text style={styles.description}>📬 lsfoodco@gmail.com</Text>
      <Text style={styles.description}>📞 +15594569050</Text>
      <Text style={styles.description}>🏠 4838 E Kings Canyon Rd, Fresno, CA 93727, Estados Unidos</Text>
      <Text style={styles.description}>Most of our client relationships are measured in years, not months.Learn more about how we can improve your ecommerce generated from, and within, social media.</Text>
      <View>
        <TextInput style={styles.input} placeholder='Name' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.textarea} multiline={true} numberOfLines={10} placeholder="leave us a message..."/>
      </View>
      <Button title='Send'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:15
  },
  textarea:{
    borderColor:"black",
    borderWidth:1,
    textAlign:"center",
    marginVertical:20
  },
  input:{
    paddingVertical:15,
    backgroundColor:"grey",
    marginTop:8,
  },
  contact:{
    fontSize:40,
    textAlign:"center",
    fontWeight:"bold"
  },
  description:{
    fontSize:20,
    paddingVertical:10
  }
})