// fill the utensils datalist
function fillUtensils(recipes) {
  // make sure every item in the datalist are unique
  const utensilsSet = new Set();
  recipes.forEach((recipe) => {
    recipe.utensils.forEach((utensil) => {
      utensilsSet.add(utensil.toLowerCase());
    });
  });

  // sort items alphabetically
  const sortUtensils = Array.from(utensilsSet).sort((a, b) => a.localeCompare(b));

  const utensilsList = sortUtensils.map((utensil) => `<option value="${utensil}" class="utensil">${utensil}</option>`);

  const utensilsDatalist = document.getElementById('utensils-list');
  utensilsDatalist.insertAdjacentHTML('beforeend', utensilsList.join(''));
}

export default fillUtensils;
