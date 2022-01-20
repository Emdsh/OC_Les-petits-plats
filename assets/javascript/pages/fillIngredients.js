// fill the ingredients datalist
function fillIngredients(recipes) {
  // make sure every item in the datalist are unique
  const ingredientsSet = new Set();
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      ingredientsSet.add(ingredient.toLowerCase());
    });
  });

  // sort items alphabetically
  const sortIngredients = Array.from(ingredientsSet)
    .sort((a, b) => a.localeCompare(b));

  const ingredientsList = sortIngredients.map(ingredient => `<option value="${ingredient}" class="ingredient">${ingredient}</option>`);

  const ingredientsDatalist = document.getElementById('ingredients-list');
  ingredientsDatalist.insertAdjacentHTML('beforeend', ingredientsList.join(''));
}

export default fillIngredients;