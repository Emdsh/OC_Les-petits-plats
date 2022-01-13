import filterFilters from './filterFilters.js';

function search() {
  const searchBar = document.getElementById('search-bar');

  searchBar.addEventListener('input', () => {
    const recipes = document.querySelectorAll('.recipe-tile');

    // if input is under 3 letters, display all recipe tiles
    if (searchBar.value.length < 3) {
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
      if (recipes[m].innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
        recipes[m].style.display = 'block';
      }
    }

    filterFilters();
  });
}

export default search;