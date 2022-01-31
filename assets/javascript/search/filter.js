/* eslint-disable consistent-return */

import filterFilters from './filterFilters.js';
import search from './search.js';

// filter recipes depending on the selected filters
function filter() {
  // get every selected filters
  const filters = Array.from(document.querySelectorAll('.filters__item')).map((list) => list.innerText.toLowerCase());
  const recipes = document.querySelectorAll('.recipe-tile');

  recipes.forEach((recipe) => {
    if (filters.length < 1) {
      recipe.style.display = 'block';
      return;
    }

    // hide every recipe
    recipe.style.display = 'none';

    // create a checksum array
    let includesAllFilters = Array(filters.length).fill(false);

    // display recipes that match with the filters
    filters.forEach((filterText) => {
      if (recipe.innerText.toLowerCase().includes(filterText)) {
        includesAllFilters.shift();
        includesAllFilters.push(true);
      }
    });

    includesAllFilters = includesAllFilters.reduce((a, b) => a && b);

    if (includesAllFilters === true) {
      recipe.style.display = 'block';
    }
  });

  // filter filters depending on the main search bar input
  filterFilters();

  // check if search bar has a value
  const searchBarValue = document.getElementById('search-bar').value;
  if (searchBarValue.length > 2) {
    search(true);
  }
}

export default filter;
