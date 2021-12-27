function generateHomepage(recipes) {

  //TODO use the .hbs file instead, how?
  const template = Handlebars.compile(document.getElementById('recipe-tile-template').innerHTML);

  const filled = template(recipes, {
    allowedProtoProperties: {
      name: true,
      time: true,
      ingredientsQuantity: true,
      description: true
    }
  });
  
  const main = document.getElementById('main');
  main.insertAdjacentHTML('beforeend', filled);
}

export default generateHomepage;