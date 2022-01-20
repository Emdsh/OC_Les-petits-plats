import filterFilters from './filterFilters.js';

// filter recipes depending on the main search bar input
function search() {
  const searchBar = document.getElementById('search-bar');

  searchBar.addEventListener('input', () => {
    const recipes = document.querySelectorAll('.recipe-tile');

    recipes.forEach(recipe => {
      if (searchBar.value.length < 3) {
        recipe.style.display = 'block';
        return;
      }

      // hide every recipes
      recipe.style.display = 'none';

      // display recipes that match with the search bar
      if (recipe.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
        recipe.style.display = 'block';
      }
    });

    // filter filters depending on the main search bar input
    filterFilters();
  });
}

export default search;