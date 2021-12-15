import fillAppliances from './fillAppliances.js';
import fillIngredients from './fillIngredients.js';
import fillUtensils from './fillUtensils.js';
import generateHomepage from './generateHomepage.js';

function fillHomepage(recipes) {
  generateHomepage(recipes);
  fillIngredients(recipes);
  fillAppliances(recipes);
  fillUtensils(recipes);
}

export default fillHomepage;