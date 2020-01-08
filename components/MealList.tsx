import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

import MealItem from '../components/MealItem';

const MealList = (props) => {
  const {navigation, items} = props;

  const renderGridItem = ({item}) => {
    const {title, id} = item;
    return (
      <MealItem
        {...item}
        onPress={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: id,
              headerTitle: title
            }
          })
        }}
      />
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={items}
        renderItem={renderGridItem}
      />
    </View>
  );
};

export default withNavigation(MealList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

