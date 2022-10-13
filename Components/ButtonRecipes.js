import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ButtonRecipes({ children, category, changeCategorySelected}) {

  return (
    <TouchableOpacity >

    <Text style={styles.button} onPress={() => changeCategorySelected(category)}>
            {children}
        </Text>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    button:{
        paddingVertical:19,
        paddingHorizontal:11,
        borderWidth:1,
        borderRadius:10,
        margin:10,
        width:103,
        textAlign:"center",
    }
})
