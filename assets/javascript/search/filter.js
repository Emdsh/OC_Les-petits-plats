import filterFilters from './filterFilters.js';

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

    // display recipes that match with the filters
    filters.forEach((filterText) => {
      if (recipe.innerText.toLowerCase().includes(filterText)) {
        recipe.style.display = 'block';
      }
    });
  });

  filterFilters();
}

export default filter;
