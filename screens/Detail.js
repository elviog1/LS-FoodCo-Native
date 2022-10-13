import { View,Button, Text,StyleSheet, ImageBackground,Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useGetOneRecipeQuery } from '../Features/recipesApi';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Detail(props) {
    const scrollRef = useRef()
    let navigation= useNavigation()
    const {data} = useGetOneRecipeQuery(props.route.params.id)
    const [recipe,setRecipe] = useState()
    useEffect(()=>{
        if(data){
            setRecipe(data)
        }
    },[data])

    const printRecipe = (item) =>(
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.buttons}>
                <Text style={styles.button} onPress={()=> navigation.navigate("Recipes")} >Go Back</Text>
                <Text style={styles.button} onPress={()=> navigation.navigate("Recipes")} >Add</Text>
                {/* <Button title='Send'></Button> */}
            </View>
            <Text style={styles.category}>{item.category}</Text>
            <Image style={styles.img} source={{uri:`${item.image}`}} />
            <Text style={styles.description}>{item.description}</Text>


            <View style={styles.descriptionTwo}>
                <Text style={styles.detail}>Allergens: {item.allergens?.map(item => item)}</Text>
                <View>
                    <Text style={styles.detail}>Details </Text>
                    <Text style={styles.detail}>Time: {item.preptime} min</Text>
                    <Text style={styles.detail}>Calories: {item.calories} </Text>
                </View>
            </View>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            <View style={styles.ingredientBox}>
                {item.ingredients?.map((item,index) =>(
                    <View style={styles.ingredients} key={index}>
                        <Text style={styles.detail}>{item.quantity}</Text>
                        <Text style={styles.detail}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )

  return (
    <ScrollView ref={scrollRef}>
        <View>
        <Header />
        <ImageBackground style={styles.banner} source={require("../assets/banner.webp")}  resizeMode="cover">
        </ImageBackground>
        {data ? printRecipe(data) : null}
        <Footer />
        <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    banner:{
        height:300,
        marginTop:30,
        alignItems:"center",
        justifyContent:"center",
      },
      img:{
        height:300,
        width:"100%",
        
      },
      container:{
        alignItems:"center",
        position:"relative",
        backgroundColor:"white",
        width:"90%",
        alignSelf:"center",
        bottom:80,
        borderWidth:2
      },
      buttons:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#a7bb92",
        borderRadius:10,
        width:"50%",
        justifyContent:"space-around"
      },
      button:{
        margin:10,
        padding:10,
      },
      category:{
        fontSize:25
      },
      title:{
        fontSize:35,
        fontWeight:"bold"
      },
      ingredients:{
        flexDirection:"row",
        width:290,
        justifyContent:"space-between",
        paddingHorizontal:5,
        paddingVertical:10
      },
      ingredientBox:{
        margin:20,
        borderWidth:2,
        backgroundColor:"#a7bb92"
      },
      description:{
        padding:20,
        textAlign:"center",
        fontSize:20,
      },
      descriptionTwo:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
    },
        detail:{
          fontSize:18
        },
        ingredientsTitle:{
          fontSize:18,
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