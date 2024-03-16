import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data'

export default function MealDetails({navigation,route}) {
    const idCategory=route.params.idParams
    const mealFilter=MEALS.filter((item)=>{item.id==idCategory})[0]
  return (
    <View >
         <Image source={mealFilter.imageUrl} />
         <Text>{mealFilter.title}</Text>
         <View>
           <Text>{mealFilter.duration}</Text>
           <Text>{mealFilter.complexity}</Text>
           <Text>{mealFilter.affordability}</Text>
         </View>
         <Text>Ingrédients</Text>
         <FlatList data={mealFilter.ingredients} renderItem={(item,index)=>(
             <Text>{item}</Text>
             
             )} keyExtractor={(index)=>{return index}}/>
             <Text>Steps</Text>
         <FlatList data={mealFilter.steps} renderItem={(item,index)=>(
            <Text>{item}</Text>
            
         )} keyExtractor={(index)=>{return index}}/>
    </View>
  )
}

const styles = StyleSheet.create({})