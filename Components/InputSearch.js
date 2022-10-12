import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function InputSearch({placeholder,handleInput}) {
  return (
    <View>
      <TextInput placeholder={placeholder} onChangeText={(e)=>handleInput(e)} ></TextInput>
    </View>
  )
}