import React from 'react';

import MealList from '../components/MealList';
import mealsStore from '../store/Meals';
import DrawerButton from '../components/DrawerButton';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import FontText from '../components/FontText';


const FavoritesScreen = (props) => {
  const items = mealsStore.favoriteMeals;

  if (!items.length) {
    return (
      <View style={styles.container}>
        <FontText>No favorite meals found. Start adding some.
        </FontText>
      </View>
    );
  }
  return (
    <MealList items={items}/>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
  headerLeft: () => <DrawerButton/>,
};

export default observer(FavoritesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
