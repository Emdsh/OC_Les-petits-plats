import buildRecipes from './api/buildRecipes.js';
import fillHomepage from './pages/fillHomepage.js';

const recipes = buildRecipes();

recipes.then(recipes => {
  console.log(recipes); //!
  fillHomepage(recipes);
});
