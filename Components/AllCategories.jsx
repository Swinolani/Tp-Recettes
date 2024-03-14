import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data';

export default function AllCategories({navigation}) {
  function goToMealsOverview(id) {
    navigation.navigate('MealsOverview', {idParams: id}); // navigate marche pas
    console.log('ff');
  }
  return (
    <View style={styles.container}>
      {CATEGORIES.map((item, index) => (
        <View
          key={item.id}
          style={[styles.item, {backgroundColor: item.color}]}>
          <Pressable></Pressable>
          <Text
            style={styles.text}
            onPress={() => {
              goToMealsOverview(item.id);
            }}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: Dimensions.get('window').width / 2 - 20,
    margin: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});
