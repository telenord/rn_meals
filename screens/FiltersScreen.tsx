import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import DrawerButton from '../components/DrawerButton';
import FONTS from '../constants/fonts';

import FilterSwitch from '../components/FilterSwitch';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const FiltersScreen = (props) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const {navigation} = props;
  const saveFilters = useCallback(() => {
    return {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    };
  }, [isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label={'Gluten-free'}
        value={isGlutenFree}
        onChange={setGlutenFree}
      />
      <FilterSwitch
        label={'Lactose-free'}
        value={isLactoseFree}
        onChange={setLactoseFree}
      />
      <FilterSwitch
        label={'Vegan'}
        value={isVegan}
        onChange={setIsVegan}
      />
      <FilterSwitch
        label={'Vegetarian'}
        value={isVegetarian}
        onChange={setIsVegetarian}
      />
    </View>
  );
};
FiltersScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Filters',
  headerLeft: () => <DrawerButton/>,
  headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='Save' iconName='ios-save' onPress={navigation.getParam('save')}/>
  </HeaderButtons>),
});

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.openSansBold,
    fontSize: 22,
    textAlign: 'center',
    margin: 20
  },
});
