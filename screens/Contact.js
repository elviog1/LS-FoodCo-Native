import { View, Text, Button,StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import MapView from "react-native-maps";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Contact() {
  const scrollRef = useRef()
  return (
    <ScrollView ref={scrollRef}>
      <Header />
    <View style={styles.container}>
      <Text style={styles.contact}>Contact</Text>
      <Text style={styles.description}>📬 lsfoodco@gmail.com</Text>
      <Text style={styles.description}>📞 +15594569050</Text>
      <Text style={styles.description}>🏠 4838 E Kings Canyon Rd, Fresno, CA 93727</Text>
      <Text style={styles.description}>Most of our client relationships are measured in years, not months.Learn more about how we can improve your ecommerce generated from, and within, social media.</Text>
      <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.82224,
        longitude: -119.78920,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      />
        <TextInput style={styles.input} placeholder='Name' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.textarea} multiline={true} numberOfLines={10} placeholder="leave us a message..."/>
      </View>
      <Button title='Send'></Button>
    </View>
    <Footer />
    <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
      </ScrollView>
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
    backgroundColor:"#a7bb92",
    marginTop:8,
    borderRadius:10,
    paddingStart:10
  },
  contact:{
    fontSize:40,
    textAlign:"center",
    fontWeight:"bold"
  },
  description:{
    fontSize:20,
    paddingVertical:10
  },
  map:{
    height: 300
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