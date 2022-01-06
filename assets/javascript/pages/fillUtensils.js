function fillUtensils(recipes) {
  const utensilsSet = new Set();
  recipes.forEach(recipe => {
    recipe.utensils.forEach(utensil => {
      utensilsSet.add(utensil.toLowerCase());
    });
  });

  const sortUtensils = Array.from(utensilsSet).sort((a, b) => a.localeCompare(b));

  const utensilsList = sortUtensils.map(utensil => `<option value="${utensil}" class="utensil">${utensil}</option>`);

  const utensilsDatalist = document.getElementById('utensils-list');
  utensilsDatalist.insertAdjacentHTML('beforeend', utensilsList.join(''));
}

export default fillUtensils;