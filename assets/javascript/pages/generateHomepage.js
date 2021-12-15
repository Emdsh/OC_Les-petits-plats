function generateHomepage(recipes) {
  const recipeTiles = [];

  recipes.forEach(recipe => {
    const ingredientsList = [];

    recipe.ingredients.forEach(ingredient => {
      ingredientsList.push(`<li>${ingredient}</li>`);
    });

    const recipeTile = `<article>
                          <figure>
                            <img>
                            <figcaption>
                              <div>
                                <h2>${recipe.name}</h2>
                                <p>${recipe.time}</p>
                              </div>
                              <div>
                                <ul>
                                  ${ingredientsList.join(``)}
                                </ul>
                                <p>${recipe.description}</p>
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