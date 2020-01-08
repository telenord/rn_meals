import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy';
import DrawerButton from '../components/DrawerButton';

const FavoritesScreen = (props) => {
  const items = MEALS.filter(meal => meal.id === 'm1');
  return (
    <MealList items={items}/>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
  headerLeft: ()=> <DrawerButton/>,
  headerRight: ()=> <DrawerButton/>,
};

export default FavoritesScreen;

