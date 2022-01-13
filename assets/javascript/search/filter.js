import filterFilters from './filterFilters.js';

function filter() {
  const filters = Array.from(document.querySelectorAll('.filters__item'));
  const recipes = document.querySelectorAll('.recipe-tile');

  if (filters.length < 1) {
    for (let h = 0; h < recipes.length; h += 1) {
      recipes[h].style.display = 'block';
    }
    return filterFilters();
  }

  // hide all recipes by default
  for (let h = 0; h < recipes.length; h += 1) {
    recipes[h].style.display = 'none';
  }

  // display recipes that contain the filter
  for (let j = 0; j < recipes.length; j += 1) {
    for (let k = 0; k < filters.length; k += 1) {
      if (recipes[j].innerText.toLowerCase().includes(filters[k].innerText.toLowerCase())) {
        recipes[j].style.display = 'block';
      }
    }
  }

  filterFilters();
}

export default filter;