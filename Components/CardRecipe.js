import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function CardRecipe(props) {
    const navigation = useNavigation()
    const allCard = props

    const printRecipe = (item) =>(
        <View style={styles.container}>
        <View style={styles.containerCard}>
            <Pressable onPress={() =>navigation.navigate(' ',{id:item.id})}>
                    <Image style={styles.img} source={{uri:`${item.image}`}} />
                    <Text style={styles.name}>{item.title}</Text>
            </Pressable>
        </View>
    </View>
    )

    console.log(allCard)
  return (
    <>
        {printRecipe(allCard)}
        {/* {allCard?.map(printRecipe)} */}
    </>
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
        borderColor:"#a7bb92",
        borderRadius:20
    },
    name:{
        fontSize:20,
        textAlign:"center",
        width:300,
    }
})