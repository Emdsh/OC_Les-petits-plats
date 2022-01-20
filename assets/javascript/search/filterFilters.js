// filter filters depending on the main search bar input
function filterFilters() {
  // get the recipes that are displayed
  const recipes = document.querySelectorAll('.recipe-tile:not([style*="display: none;"])');
  const filters = document.querySelectorAll('.datalist option');

  for (let i = 0; i < filters.length; i += 1) {
    // hide every filter items
    filters[i].style.display = 'none';
    // display filter items that are found in the displayed recipes
    for (let j = 0; j < recipes.length; j += 1) {
      if (recipes[j].innerText.toLowerCase().includes(filters[i].innerText.toLowerCase())) {
        filters[i].style.display = 'block';
      }
    }
  }
}

export default filterFilters;
