import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data';

export default function MealsOverview({navigation, route}) {
  const idCategory = route.params.idParams;

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

  const mealsFilter = MEALS.filter(item => {
    return isChaineInArray(idCategory, item.categoryIds);
  });

  return (
    <View>
      <FlatList
        data={mealsFilter}
        renderItem={({item, index}) => (
          <Pressable onPress={() => goToMealsOverview(item.id)}>
            <View>
              <Image source={{uri: item.imageUrl}} width={50} height={50} />

              <Text>{item.title}</Text>
              <View>
                <Text>{item.duration}</Text>
                <Text>{item.complexity}</Text>
                <Text>{item.affordability}</Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
