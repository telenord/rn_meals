import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import COLORS from '../constants/colors';
import isAndroid from '../constants/Platform';
import FiltersScreen from '../screens/FiltersScreen';
import FONTS from '../constants/fonts';


const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: isAndroid ? COLORS.primaryColor : COLORS.white,
  },
  headerTitleStyle: {
    fontFamily: FONTS.openSansBold,
    maxWidth: 180,
    textOverflow: 'ellipsis'
  },
  headerBackTitleStyle: {
    fontFamily: FONTS.openSans
  },
  headerTintColor: isAndroid ? COLORS.white : COLORS.primaryColor
};

const getTabOptions = name => ({
  tabBarIcon: (tabInfo) => (<Ionicons
    name={name}
    size={25}
    color={tabInfo.tintColor}
  />)
});
const getTabBarLabel = text => (isAndroid ? <Text style={{fontFamily: FONTS.openSans}}>{text}</Text> : {text})

const MealsNavigation = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailsScreen
}, {
  defaultNavigationOptions
});

const FavoriteMealsNavigator = createStackNavigator({
  Favorite: FavoritesScreen,
  MealDetail: MealDetailsScreen
}, {
  defaultNavigationOptions
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: getTabOptions('ios-restaurant'),
    tabBarLabel: getTabBarLabel('Meals')
  },
  Favorites: {
    screen: FavoriteMealsNavigator,
    navigationOptions: getTabOptions('ios-star'),
    tabBarLabel: getTabBarLabel('Favorites')
  },
};

const MealsFavTabNavigator = isAndroid ?
  createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: COLORS.accentColor,
    shifting: true,
    barStyle: {
      backgroundColor: COLORS.primaryColor
    }
  }) :
  createBottomTabNavigator(tabScreenConfig,
    {
      tabBarOptions: {
        activeTintColor: COLORS.accentColor,
        labelStyle: {
          fontFamily: FONTS.openSans
        }
      }
    });


const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
}, {
  defaultNavigationOptions
});

const MainNav = createDrawerNavigator({
  Meals: MealsFavTabNavigator,
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: COLORS.accentColor,
    labelStyle: {
      fontFamily: FONTS.openSansBold
    }
  }
});

export default createAppContainer(MainNav);
