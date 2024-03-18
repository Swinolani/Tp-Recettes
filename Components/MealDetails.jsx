import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native'; // Ajout de Image
import {MEALS} from '../data';

export default function MealDetails({route}) {
  const idCategory = route.params.idParams;
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
        keyExtractor={(item, index) => index.toString()} // Utilisation de index.toString()
      />
      <Text>Steps</Text>
      <FlatList
        data={mealFilter.steps}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
