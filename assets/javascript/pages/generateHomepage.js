function generateHomepage(recipes) {
  // const recipeTiles = [];

  // recipes.forEach(recipe => {
  //   const ingredientsList = [];

  //   recipe.ingredientsQuantity.forEach(ingredient => {
  //     ingredientsList.push(`<li>${ingredient}</li>`);
  //   });

  //   const recipeTile = `<article class="recipe-tile">
  //                         <figure>
  //                           <img class="recipe-tile__img">
  //                           <figcaption class="recipe-tile__text">
  //                             <div class="recipe-tile__text-flex">
  //                               <h2 class="recipe-tile__text-title">${recipe.name}</h2>
  //                               <p class="recipe-tile__text-time">${recipe.time}</p>
  //                             </div>
  //                             <div class="recipe-tile__text-flex">
  //                               <ul class="recipe-tile__text-ingredients">
  //                                 ${ingredientsList.join('')}
  //                               </ul>
  //                               <p class="recipe-tile__text-description">${recipe.description}</p>
  //                             </div>
  //                           </figcaption>
  //                         </figure>
  //                       </article>`;

  //   recipeTiles.push(recipeTile);
  // });

  //TODO use the .hbs file instead, how?
  const template = Handlebars.compile(document.getElementById('recipe-tile-template').innerHTML);

  //! better if I figure out how to make it work
  // const filled = template(recipes, {
  //   allowedProtoMethods: {
  //     __lookupGetter__: true
  //   }
  // });
  //! with vulnerabilities
  const filled = template(recipes);
  
  const main = document.getElementById('main');
  main.insertAdjacentHTML('beforeend', filled);
}

export default generateHomepage;