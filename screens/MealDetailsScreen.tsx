import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import FONTS from '../constants/fonts';
import { MEALS } from '../data/dummy';
import CustomHeaderButton from '../components/HeaderButton';
import { StackHeaderOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import FontText from '../components/FontText';

const MealDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);
  const {imageUrl, duration, complexity, affordability, ingredients, steps} = meal;

  const renderList = (list) => list.map(item => (<FontText key={item} style={styles.listItem}>{item}</FontText>));
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image}/>
      <View style={styles.mealDetails}>
        <FontText>{duration}m</FontText>
        <FontText style={styles.textUpperCase}>{complexity}</FontText>
        <FontText style={styles.textUpperCase}>{affordability}</FontText>
      </View>
      <Text style={styles.title}> Ingredients</Text>
      {renderList(ingredients)}
      <Text style={styles.title}>Steps</Text>
      {renderList(steps)}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = ({navigation}): StackHeaderOptions => ({
  headerTitle: navigation.getParam('headerTitle'),
  headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='Favorite' iconName='ios-star' onPress={() => {
    }}/>
  </HeaderButtons>),
});

export default MealDetailsScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: FONTS.openSansBold,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15
  },

  mealDetails: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',

  },
  textUpperCase: {
    textTransform: 'uppercase'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1
  }
});
