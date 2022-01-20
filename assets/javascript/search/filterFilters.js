// filter filters depending on the main search bar input
function filterFilters() {
  // get the recipes that are displayed
  const recipes = Array.from(document.querySelectorAll('.recipe-tile:not([style*="display: none;"])')).map(element => element.innerText.toLowerCase());
  const filters = document.querySelectorAll('.datalist option');

  filters.forEach(filter => {
    // hide every filter items
    filter.style.display = 'none';
    // display filter items that are found in the displayed recipes
    recipes.forEach(recipe => {
      if (recipe.includes(filter.value)) {
        filter.style.display = 'block';
      }
    });
  });
}

export default filterFilters;