function filterFilters() {
  const recipes = Array.from(document.querySelectorAll('.recipe-tile:not([style*="display: none;"])')).map(element => element.innerText.toLowerCase());
  const filters = document.querySelectorAll('.datalist option');

  filters.forEach(filter => {
    filter.style.display = 'none';
    recipes.forEach(recipe => {
      if (recipe.includes(filter.value)) {
        filter.style.display = 'block';
      }
    })
  })
}

export default filterFilters;