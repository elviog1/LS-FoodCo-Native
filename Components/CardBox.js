import { View, Text,Image,StyleSheet,Button } from 'react-native'
import React from 'react'
import { useAllBoxesQuery } from '../Features/boxesApi'

export default function CardBox() {

    const {data} = useAllBoxesQuery()
    console.log(data)
    const printBoxes = (item)=> (
        <View style={styles.containerBox} key={item.name}>
            <Image style={styles.img} source={{uri:`${item.recipe.image}`}} />
            <View style={styles.nameBuy}>
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>${item.price}</Text>
                </View>
            </View>
                <Text style={styles.send}>Send</Text>
        </View>
    )
  return (
    <View style={styles.container}>
        {data.map(printBoxes)}
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        height:340,
        width:335,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    container:{
        flexWrap:"wrap",
        flexDirection:"row",
        marginTop:20,
        // alignItems:"center"
        justifyContent:"center"
    },
    containerBox:{
        borderWidth:5,
        borderColor:"#a7bb92",
        alignItems:"center",
        width:340,
        marginVertical:20,
        borderRadius:20
    },
    text:{
        fontSize:20,
        textAlign:"center",
        justifyContent:"center"
    },
    nameBuy:{
        flexDirection:"row",
    },
    send:{
        backgroundColor:"#a7bb92",
        paddingHorizontal:35,
        paddingVertical:10,
        borderRadius:6,
        marginVertical:10
    }
})