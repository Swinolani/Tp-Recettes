import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllCategories from './Components/AllCategories';
import MealsOverview from './Components/MealsOverview';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllCategories"
          component={AllCategories}
          options={{title: 'All categories'}}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});