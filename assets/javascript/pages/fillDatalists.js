function fillSet(set, item) {
  set.add(item.toLowerCase());
}

function sorting(array) {
  return array.sort((a, b) => a.localeCompare(b));
}

function format(array, arrayName) {
  const type = Object.keys(arrayName)[0].toLowerCase().replace('sorted', '').replace(/s\b/, '');
  return array.map((item) => `<option value="${item}" class="${type}">${item}</option>`);
}

// fill the ingredients datalist
function fillDatalists(recipes) {
  // make sure every item in the datalists are unique
  const ingredientsSet = new Set();
  const appliancesSet = new Set();
  const utensilsSet = new Set();

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      fillSet(ingredientsSet, ingredient);
      // ingredientsSet.add(ingredient.toLowerCase());
    });

    fillSet(appliancesSet, recipe.appliance);
    // appliancesSet.add(recipe.appliance.toLowerCase());

    recipe.utensils.forEach((utensil) => {
      fillSet(utensilsSet, utensil);
      // utensilsSet.add(utensil.toLowerCase());
    });
  });

  // sort items alphabetically
  const sortedIngredients = sorting(Array.from(ingredientsSet));
  const sortedAppliances = sorting(Array.from(appliancesSet));
  const sortedUtensils = sorting(Array.from(utensilsSet));

  const ingredientsList = format(sortedIngredients, { sortedIngredients });
  const appliancesList = format(sortedAppliances, { sortedAppliances });
  const utensilsList = format(sortedUtensils, { sortedUtensils });

  const ingredientsDatalist = document.getElementById('ingredients-list');
  const appliancesDatalist = document.getElementById('appliances-list');
  const utensilsDatalist = document.getElementById('utensils-list');

  ingredientsDatalist.insertAdjacentHTML('beforeend', ingredientsList.join(''));
  appliancesDatalist.insertAdjacentHTML('beforeend', appliancesList.join(''));
  utensilsDatalist.insertAdjacentHTML('beforeend', utensilsList.join(''));
}

export default fillDatalists;
