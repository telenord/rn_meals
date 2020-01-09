import React from 'react';
import MealList from '../components/MealList';
import mealsStore from '../store/Meals';
import { observer } from 'mobx-react';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const categoryId = navigation.getParam('categoryId');
  const filteredMeals = mealsStore.filteredMealsByCategoryId(categoryId);
  return (
    <MealList items={filteredMeals}/>
  );
};

CategoryMealsScreen.navigationOptions = ({navigation}) => ({
  headerTitle: navigation.getParam('headerTitle'),
});

export default observer(CategoryMealsScreen);



