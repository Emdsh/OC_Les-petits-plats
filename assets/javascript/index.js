import buildRecipes from './api/buildRecipes.js';
import addFilterEvent from './filters/addFilterEvent.js';
import clearFilterSearch from './filters/clearFilterSearch.js';
import filterDatalist from './filters/filterDatalist.js';
import showDatalist from './filters/showDatalist.js';
import generateHomepage from './pages/generateHomepage.js';
import search from './search/search.js';

function onSearchEvent() {
  search();
}

// fetch recipes from the API and build an array
const recipeArray = buildRecipes();

recipeArray.then((recipes) => {
  // populate homepage with recipes
  generateHomepage(recipes);

  // deal with user interactions
  showDatalist();
  clearFilterSearch();
  filterDatalist();
  addFilterEvent();

  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', onSearchEvent);
});
