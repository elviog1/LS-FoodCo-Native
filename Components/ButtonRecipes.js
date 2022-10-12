import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonRecipes({ children, category, changeCategorySelected}) {
  return (
    <Text style={styles.button} onPress={() => changeCategorySelected(category)}>
            {children}
        </Text>
  )
}
const styles =StyleSheet.create({
    button:{
        padding:14,
        borderWidth:1,
        borderRadius:10,
        margin:10,
        width:90,
        textAlign:"center",
    }
})
