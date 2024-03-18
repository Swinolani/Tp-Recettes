import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {MEALS} from '../data';

export default function MealDetails({route}) {
  // Recuperation de l'id de la recette ciblé
  const idCategory = route.params.idParams;
  // Recuperation de la recette par l'id recupéré. On recupère ici un tableau qui contiendra toujours un seul element d'ou le '[0]'
  const mealFilter = MEALS.filter(item => item.id === idCategory)[0];

  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: mealFilter.imageUrl}}
        width={50}
        height={50}
      />
      <Text>{mealFilter.title}</Text>
      <View>
        <Text>{mealFilter.duration}</Text>
        <Text>{mealFilter.complexity}</Text>
        <Text>{mealFilter.affordability}</Text>
      </View>
      <Text>Ingrédients</Text>
      <FlatList
        data={mealFilter.ingredients}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
      <Text>Steps</Text>
      <FlatList
        data={mealFilter.steps}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
