import { action,  observable } from 'mobx';
import Meal from '../models/meal';
import { MEALS } from '../data/dummy';

interface IFilters {
  isGlutenFree: boolean,
  isLactoseFree: boolean,
  isVegan: boolean,
  isVegetarian: boolean
}

class MealsListStore {
  @observable private _meals: Meal[] = MEALS;
  @observable private _filteredMeals: Meal[] = MEALS;
  @observable private _favoriteMeals: Meal[] = [];

  get meals(): Meal[] {
    return this._meals;
  }

  get filteredMeals(): Meal[] {
    return this._filteredMeals
  }

  get favoriteMeals(): Meal[] {
    return this._favoriteMeals;
  }

  set filteredMeals(meals: Meal[]) {
    this._filteredMeals = meals;
  }

  filteredMealsByCategoryId(catId: string): Meal[] {
    return this.filteredMeals.filter(meal => meal.categoryIds.includes(catId));
  }


  getMealById(mealId: string): Meal {
    return this.meals.find(meal => meal.id === mealId);
  }

  isFavoriteMeal(mealId: string): Boolean {
    return this.favoriteMeals.some(meal => meal.id === mealId);
  }

  @action
  toggleFavoriteMeal(mealId: string) {
    const index = this.favoriteMeals.findIndex(meal => meal.id === mealId);
    if (index >= 0) {
      this.favoriteMeals.splice(index, 1);
    } else {
      const meal = this.getMealById(mealId);
      this.favoriteMeals.push(meal);
    }
  }

  @action
  applyFilters(filters: IFilters) {
    this.filteredMeals = this.filteredMeals.filter(meal => {
      if (filters.isGlutenFree && !meal.isGlutenFree) {
        return false;
      }
      if (filters.isLactoseFree && !meal.isLactoseFree) {
        return false;
      }
      if (filters.isVegan && !meal.isVegan) {
        return false;
      }
      if (filters.isVegetarian && !meal.isVegetarian) {
        return false;
      }
      return true;
    });
  }
}

const mealsStore = new MealsListStore();
export default mealsStore;
