/* eslint-disable consistent-return */

import error from './error.js';
import filterFilters from './filterFilters.js';

// filter recipes depending on the main search bar input
function search(isComingFromFilter) {
  const searchBarValue = document.getElementById('search-bar').value;
  let recipes = document.querySelectorAll('.recipe-tile');

  if (isComingFromFilter === true) {
    recipes = document.querySelectorAll('.recipe-tile:not([style*="display: none;"])');
  }

  // if input is under 3 letters, display all recipe tiles
  if (searchBarValue.length < 3) {
    for (let g = 0; g < recipes.length; g += 1) {
      recipes[g].style.display = 'block';
    }
    return filterFilters();
  }
  // start filtering once input is at least 3 letters
  // hide all recipes by default
  for (let h = 0; h < recipes.length; h += 1) {
    recipes[h].style.display = 'none';
  }

  // display recipes that contain the input in the search bar
  for (let m = 0; m < recipes.length; m += 1) {
    if (recipes[m].innerText.toLowerCase().includes(searchBarValue.toLowerCase())) {
      recipes[m].style.display = 'block';
    }
  }

  // will display an error message if the page is empty
  error();

  // filter filters depending on the main search bar input
  filterFilters();
}

export default search;
