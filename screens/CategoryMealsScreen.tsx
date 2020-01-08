import React from 'react';

import { MEALS } from '../data/dummy';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam('categoryId');
  const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return (
     <MealList items={filteredMeals}/>
  );
};

CategoryMealsScreen.navigationOptions = ({navigation}) => ({
  headerTitle: navigation.getParam('headerTitle'),
});

export default CategoryMealsScreen;



