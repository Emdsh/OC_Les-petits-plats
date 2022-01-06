import buildRecipes from './api/buildRecipes.js';
import addFilter from './filters/addFilter.js';
import filterDatalist from './filters/filterDatalist.js';
import showDatalist from './filters/showDatalist.js';
import fillHomepage from './pages/fillHomepage.js';

const recipes = buildRecipes();

recipes.then(recipes => {
  fillHomepage(recipes);

  showDatalist();
  filterDatalist();
  addFilter();
});
