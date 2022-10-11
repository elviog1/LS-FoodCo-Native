import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Home() {
    const scrollRef = useRef()
  return (
    <ScrollView ref={scrollRef}>
        <View>
        <Header />
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
        <Text>asdadsads</Text>
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
  }
})