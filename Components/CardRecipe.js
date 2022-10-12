import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function CardRecipe(props) {
  return (
    <View style={styles.container}>
        <View style={styles.containerCard}>
                <Image style={styles.img} source={{uri:`${props.image}`}} />
                <Text style={styles.name}>{props.title}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    img:{
        width:300,
        height:300,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    container:{
        alignItems:"center",
        marginVertical:20,
    },
    containerCard:{
        borderWidth:3,
        borderColor:"red",
        borderRadius:20
    },
    name:{
        fontSize:20,
        textAlign:"center",
        width:300,
    }
})