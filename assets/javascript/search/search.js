import filterFilters from './filterFilters.js';
import error from './error.js';

// filter recipes depending on the main search bar input
function search(isComingFromFilter) {
  const searchBarValue = document.getElementById('search-bar').value;
  let recipes = document.querySelectorAll('.recipe-tile');

  if (isComingFromFilter === true) {
    recipes = document.querySelectorAll('.recipe-tile:not([style*="display: none;"])');
  }

  recipes.forEach((recipe) => {
    if (searchBarValue.length < 3) {
      recipe.style.display = 'block';
      return;
    }

    // hide every recipes
    recipe.style.display = 'none';

    // display recipes that match with the search bar
    if (recipe.innerText.toLowerCase().includes(searchBarValue.toLowerCase())) {
      recipe.style.display = 'block';
    }
  });

  // will display an error message if the page is empty
  error();

  // filter filters depending on the main search bar input
  filterFilters();
}

export default search;
