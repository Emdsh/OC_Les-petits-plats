function generateHomepage(recipes) {
  const recipeTiles = [];

  recipes.forEach(recipe => {
    const ingredientsList = [];

    recipe.ingredientsQuantity.forEach(ingredient => {
      ingredientsList.push(`<li>${ingredient}</li>`);
    });

    const recipeTile = `<article class="recipe-tile">
                          <figure>
                            <img class="recipe-tile__img">
                            <figcaption class="recipe-tile__text">
                              <div class="recipe-tile__text-flex">
                                <h2 class="recipe-tile__text-title">${recipe.name}</h2>
                                <p class="recipe-tile__text-time">${recipe.time}</p>
                              </div>
                              <div class="recipe-tile__text-flex">
                                <ul class="recipe-tile__text-ingredients">
                                  ${ingredientsList.join('')}
                                </ul>
                                <p class="recipe-tile__text-description">${recipe.description}</p>
                              </div>
                            </figcaption>
                          </figure>
                        </article>`;

    recipeTiles.push(recipeTile);
  });

  const main = document.getElementById('main');

  main.insertAdjacentHTML('beforeend', recipeTiles.join(``));
}

export default generateHomepage;