import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function LayoutWeb(props) {
  return (
    <View>
      <Header />
      {props.children}
      <Footer />
    </View>
  )
}