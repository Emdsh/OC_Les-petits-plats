import { Recipe } from '../utils/recipe.c.js';
import getRecipes from './getRecipes.js';

// build recipes array
function buildRecipes() {
  const api = getRecipes();
  
  const builder = api.then(recipes => {
    const recipesArray = [];

    recipes.forEach(recipe => recipesArray.push(new Recipe(recipe)));

    return recipesArray;
  });

  return builder;
}

export default buildRecipes;