/* eslint-disable no-undef */

// put recipes in the homepage
function fillHomepage(recipes) {
  const main = document.getElementById('main');

  // build every recipe tile with Handlebars
  fetch('assets/javascript/templates/recipeTile.hbs')
    .then((response) => response.text())
    .then((text) => Handlebars.compile(text))
    .then((fn) => fn(recipes, {
      allowedProtoProperties: {
        name: true,
        time: true,
        ingredientsQuantity: true,
        description: true,
      },
    }))
    .then((html) => main.insertAdjacentHTML('beforeend', html));
}

export default fillHomepage;
