function generateHomepage(recipes) {  
  const main = document.getElementById('main');

  fetch('assets/javascript/handlebars/recipeTile.hbs')
    .then(response => response.text())
    .then(text => Handlebars.compile(text))
    .then(fn => fn(recipes, {
      allowedProtoProperties: {
        name: true,
        time: true,
        ingredientsQuantity: true,
        description: true
      }
    }))
    .then(html => main.insertAdjacentHTML('beforeend', html));
}

export default generateHomepage;