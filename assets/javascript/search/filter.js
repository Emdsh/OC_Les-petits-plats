/* eslint-disable consistent-return */

import filterFilters from './filterFilters.js';
import search from './search.js';

// filter recipes depending on the selected filters
function filter() {
  // get every selected filters
  const filters = Array.from(document.querySelectorAll('.filters__item'));
  const recipes = document.querySelectorAll('.recipe-tile');

  if (filters.length < 1) {
    for (let h = 0; h < recipes.length; h += 1) {
      recipes[h].style.display = 'block';
    }
    filterFilters();
    // check if search bar has a value
    const searchBarValue = document.getElementById('search-bar').value;
    if (searchBarValue.length > 2) {
      search(true);
    }
    return;
  }

  // hide all recipes by default
  for (let h = 0; h < recipes.length; h += 1) {
    recipes[h].style.display = 'none';
  }

  // display recipes that contain every filters
  for (let j = 0; j < recipes.length; j += 1) {
    // create a checksum array
    let includesAllFilters = Array(filters.length).fill(false);

    for (let k = 0; k < filters.length; k += 1) {
      if (recipes[j].innerText.toLowerCase().includes(filters[k].innerText.toLowerCase())) {
        includesAllFilters.shift();
        includesAllFilters.push(true);
      }
    }

    includesAllFilters = includesAllFilters.reduce((a, b) => a && b);

    if (includesAllFilters === true) {
      recipes[j].style.display = 'block';
    }
  }

  // filter filters depending on the main search bar input
  filterFilters();

  // check if search bar has a value
  const searchBarValue = document.getElementById('search-bar').value;
  if (searchBarValue.length > 2) {
    search(true);
  }
}

export default filter;
