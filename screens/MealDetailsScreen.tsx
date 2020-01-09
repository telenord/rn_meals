import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { observer } from 'mobx-react';

import FONTS from '../constants/fonts';
import CustomHeaderButton from '../components/HeaderButton';
import { StackHeaderOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import FontText from '../components/FontText';
import mealsStore from '../store/Meals';

const MealDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const meal = mealsStore.getMealById(mealId);
  const isFavorite = mealsStore.isFavoriteMeal(mealId);
  const {imageUrl, duration, complexity, affordability, ingredients, steps} = meal;

  useEffect(() => {
    navigation.setParams({isFavorite: isFavorite})
  }, [isFavorite]);

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
  headerRight: () => {
    const mealId = navigation.getParam('mealId');
    const isFavorite = navigation.getParam('isFavorite');

    return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={() => {
        mealsStore.toggleFavoriteMeal(mealId)
      }}/>
    </HeaderButtons>)
  },
});

export default observer(MealDetailsScreen);


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
