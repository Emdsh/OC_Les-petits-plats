function filter() {
  const filters = Array.from(document.querySelectorAll('.filters__item')).map(list => list.innerText.toLowerCase());
  const recipes = document.querySelectorAll('.recipe-tile');


  recipes.forEach(recipe => {
    if (filters.length < 1) {
      recipe.style.display = 'block';
      return;
    }

    recipe.style.display = 'none';

    filters.forEach(filter => {
      if (recipe.innerText.toLowerCase().includes(filter)) {
        recipe.style.display = 'block';
      }
    });
  });
}

export default filter;