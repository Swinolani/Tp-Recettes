import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { MEALS } from '../data';

export default function MealsOverview({navigation,route}) {
  const idCategory=route.params.idParams
  function goToMealsOverview(id) {
    navigation.navigate('MealDetails', {idParams: id}); 
  }
  function isChaineInArray(chaine, tableau) {
  
    for (let i = 0; i < tableau.length; i++) {
        
        if (tableau[i] === chaine) {
            
            return true;
        }
    }
    
    return false;
}
  // Catégories concernées par l'id
  const mealsFilter=MEALS.filter((item)=>{isChaineInArray(idCategory,item.categoryIds)})
  return (
    <View >
      <FlatList data={mealsFilter} renderItem={(item,index)=>(
        <View>
          <Pressable onPress={goToDetails(item.id)}>

          <Image source={item.imageUrl} />
          <Text>{item.title}</Text>
          <View>
            <Text>{item.duration}</Text>
            <Text>{item.complexity}</Text>
            <Text>{item.affordability}</Text>
          </View>
          </Pressable>
        </View>
        
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({});
