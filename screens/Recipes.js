import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useGetAllRecipeQuery, useGetRecipesByFilterQuery } from '../Features/recipesApi'
import CardRecipe from '../Components/CardRecipe'
import ButtonRecipes from '../Components/ButtonRecipes'
import InputSearch from '../Components/InputSearch'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Products() {
    const scrollRef = useRef()
    const [ categorySelected, setCategorySelected] = useState('')
    const [ recipeByFilter, setRecipeByFilter] = useState({title: '', category: ''});
    const [ allRecipes, setAllRecipes] = useState();
    const [ allFilteredRecipes, setAllFilteredRecipes] = useState();
    
    // const { bcgColor, fontColor } = useSelector(state => state.color);

    const { data} = useGetAllRecipeQuery();
    const { data: filteredRecipesData } = useGetRecipesByFilterQuery(recipeByFilter);
    
    useEffect(()=>{ 
      if( data ){
        // console.log(data)
        setAllRecipes(data)
      } 
    },[data]) 


  useEffect(()=> {
      if ( filteredRecipesData ){
          setAllFilteredRecipes(filteredRecipesData)
      }
  }, [filteredRecipesData])

  

  const changeCategorySelected = (category) => {
    setCategorySelected(category)
    setRecipeByFilter({...recipeByFilter, category: category})
}
const handleInput = (e) => {
    setRecipeByFilter({...recipeByFilter, title: inputText});
};

const [inputText,setInputText] = useState("")



const showRecipesCategories = (recipes) => {
  let allCategories = recipes.map( recipe => recipe.category )
  let categories = [...new Set(allCategories)]
  return (
      <View>
        <Text style={styles.choose}>Choose a category</Text>
        <View style={styles.categoryBox}>
          <ButtonRecipes changeCategorySelected={changeCategorySelected} category=''>All</ButtonRecipes>
          {categories.map((category, index) => <ButtonRecipes category={category} key={index} changeCategorySelected={changeCategorySelected}>{category}</ButtonRecipes>)}
        </View>
      </View>
  )
}

const showRecipesCards = (recipes) =>{
  return (
    <View>
      <Text style={styles.category}>Category: {categorySelected ? categorySelected : 'All'} ({allFilteredRecipes.length})</Text>
      {recipes?.map((recipe,index) => <CardRecipe  key={index} id={recipe._id} title={recipe.title} image={recipe.image}/> )}
    </View>
  )
}

useEffect(()=>{
  setRecipeByFilter({...recipeByFilter, title: inputText});
},[inputText])

  return (
    <ScrollView ref={scrollRef}>
      <View>
        <Header />
        <Text style={styles.title}>An ocassion, a recipe</Text>
        <Text style={styles.title.sub}>In our company we take care of provide a lot recipes for each moment you need it. Get fun discovering a lot of recipes in our menues.</Text>
  
        <TextInput style={styles.search} placeholder='Search' onChangeText={setInputText}   />
        {/* <InputSearch placeholder={'Search'} type={'search'} inputRecipe={recipeByFilter.title} handleInput={handleInput}/> */}

        {allRecipes && showRecipesCategories(allRecipes)}
        {allFilteredRecipes && showRecipesCards(allFilteredRecipes)}

      <Footer />
      <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  title:{
    fontWeight: "bold",
    textAlign:"center",
    fontSize:25,
    marginTop:30,
    sub:{
      fontSize: 20,
      paddingHorizontal:30,
      marginTop:10,
    }
  },
  search:{
    backgroundColor:"#a7bb92",
    padding:5,
    borderRadius:8,
    margin:20
  },
  categoryBox:{
    flexDirection:"row",
    paddingHorizontal:20,
    flexWrap:"wrap"
  },
  choose:{
    textAlign:"center",
    fontSize:20,
  },
  category:{
    fontSize:22,
    textAlign:"center"
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