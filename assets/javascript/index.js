import buildRecipes from './api/buildRecipes.js';
import addFilter from './filters/addFilter.js';
import clearFilterSearch from './filters/clearFilterSearch.js';
import filterDatalist from './filters/filterDatalist.js';
import showDatalist from './filters/showDatalist.js';
import fillHomepage from './pages/fillHomepage.js';
import search from './search/search.js';

const recipes = buildRecipes();

recipes.then(recipes => {
  fillHomepage(recipes);

  showDatalist();
  clearFilterSearch();
  filterDatalist();
  addFilter();

  search();
});
