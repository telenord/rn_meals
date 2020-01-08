import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy';
import CategoryGridTile from '../components/CategoryGridTile';
import DrawerButton from '../components/DrawerButton';

const CategoriesScreen = (props) => {
  const renderGridItem = ({item}) => {
    const {title, id, color} = item;
    return (
      <CategoryGridTile
        title={title}
        color={color}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: id,
              headerTitle: title
            }
          })
        }}>
      </CategoryGridTile>
    )
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions =  {
  headerTitle: 'Meals Categories',
  headerLeft: ()=><DrawerButton />,
};

export default CategoriesScreen;


