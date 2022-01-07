function search() {
  const searchBar = document.getElementById('search-bar');

  searchBar.addEventListener('input', () => {
    const recipes = document.querySelectorAll('.recipe-tile');

    recipes.forEach(recipe => {
      if (searchBar.value.length < 3) {
        recipe.style.display = 'block';
        return;
      }

      recipe.style.display = 'none';

      if (recipe.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
        recipe.style.display = 'block';
        console.log(recipe.innerText);
      }
    });
  });
}

export default search;