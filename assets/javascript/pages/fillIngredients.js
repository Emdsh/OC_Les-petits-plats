function fillIngredients(recipes) {
  const ingredientsSet = new Set();
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      ingredientsSet.add(ingredient.toLowerCase());
    });
  });

  const sortIngredients = Array.from(ingredientsSet)
    .sort((a, b) => a.localeCompare(b));

  const ingredientsList = sortIngredients.map(ingredient => `<option value="${ingredient}" class="ingredient">${ingredient}</option>`);

  const ingredientsDatalist = document.getElementById('ingredients-list');
  ingredientsDatalist.insertAdjacentHTML('beforeend', ingredientsList.join(''));
}

export default fillIngredients;