function filterFilters() {
  const recipes = document.querySelectorAll('.recipe-tile:not([style*="display: none;"])');
  const filters = document.querySelectorAll('.datalist option');
  
  for (let i = 0; i < filters.length; i += 1) {
    filters[i].style.display = 'none';
    for (let j = 0; j < recipes.length; j += 1) {
      if (recipes[j].innerText.toLowerCase().includes(filters[i].innerText.toLowerCase())) {
        filters[i].style.display = 'block';
      }
    }
  }
}

export default filterFilters;