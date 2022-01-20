import buildRecipes from './api/buildRecipes.js';
import addFilter from './filters/addFilter.js';
import clearFilterSearch from './filters/clearFilterSearch.js';
import filterDatalist from './filters/filterDatalist.js';
import showDatalist from './filters/showDatalist.js';
import fillHomepage from './pages/fillHomepage.js';
import search from './search/search.js';

// fetch recipes from the API and build an array
const recipes = buildRecipes();

recipes.then(recipes => {
  // populate homepage with recipes
  fillHomepage(recipes);

  // deal with user interactions
  showDatalist();
  clearFilterSearch();
  filterDatalist();
  addFilter();

  search();
});
