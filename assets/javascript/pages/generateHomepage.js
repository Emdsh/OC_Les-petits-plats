import fillHomepage from './fillHomepage.js';
import fillDatalists from './fillDatalists.js';

// populate homepage with recipes
function generateHomepage(recipes) {
  // put recipes in the homepage
  fillHomepage(recipes);
  // fill the ingredients, appliances, and utensils datalists
  fillDatalists(recipes);
}

export default generateHomepage;
