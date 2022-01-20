export class Recipe {
  constructor(recipe) {
    this._appliance = recipe.appliance;
    this._description = recipe.description;
    this._ingredients = recipe.ingredients;
    this._name = recipe.name;
    this._servings = recipe.servings;
    this._time = recipe.time;
    this._utensils = recipe.utensils;
  }

  get appliance() {
    return this._appliance;
  }

  get description() {
    return this._description;
  }

  // return ingredients
  get ingredients() {
    const ingredientsArray = [];

    this._ingredients.forEach(i => {
      ingredientsArray.push(i.ingredient);
    });
    
    return ingredientsArray;
  }

  // return ingredients and their quantity
  get ingredientsQuantity() {
    const ingredientsArray = [];

    this._ingredients.forEach(i => {
      if (i.quantity) {
        if (i.unit) {
          ingredientsArray.push(`<b>${i.ingredient}:</b> ${i.quantity} ${i.unit}`);
        }
        else {
          ingredientsArray.push(`<b>${i.ingredient}:</b> ${i.quantity}`);
        }
      }
      else {
        ingredientsArray.push(`<b>${i.ingredient}</b>`);
      }
    });

    return ingredientsArray;
  }

  get name() {
    return this._name;
  }

  get servings() {
    return this._servings;
  }

  get time() {
    return this._time;
  }

  get utensils() {
    return this._utensils;
  }
}