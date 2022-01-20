import fillAppliances from './fillAppliances.js';
import fillIngredients from './fillIngredients.js';
import fillUtensils from './fillUtensils.js';
import generateHomepage from './generateHomepage.js';

// populate homepage with recipes
function fillHomepage(recipes) {
  // put recipes in the homepage
  generateHomepage(recipes);
  // fill the ingredients, appliances, and utensils datalists
  fillIngredients(recipes);
  fillAppliances(recipes);
  fillUtensils(recipes);
}

export default fillHomepage;