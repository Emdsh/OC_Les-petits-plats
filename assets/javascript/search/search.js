function search() {
  const searchBar = document.getElementById('search-bar');

  searchBar.addEventListener('input', () => {
    const recipeTiles = document.querySelectorAll('.recipe-tile');

    // if input is under 3 letters, display all recipe tiles
    if (searchBar.value.length < 3) {
      for (let g = 0; g < recipeTiles.length; g += 1) {
        recipeTiles[g].style.display = 'block';
      }
    } else {
      // start filtering once input is at least 3 letters
      const recipeTilesContent = document.querySelectorAll('.recipe-tile__text');

      // hide all recipes by default
      for (let h = 0; h < recipeTiles.length; h += 1) {
        recipeTiles[h].style.display = 'none';
      }
  
      // fetch the text inside of the tiles
      const recipesText = [];
      for (let i = 0; i < recipeTilesContent.length; i += 1) {
        const temp = [];
        const textBlocks = recipeTilesContent[i].children;
  
        for (let j = 0; j < textBlocks.length; j += 1) {
          const text = textBlocks[j].children;
  
          for (let k = 0; k < text.length; k += 1) {
            if (text[k].children.length === 0) {
              temp.push(text[k].innerText.toLowerCase());
            } else {
              const deepText = text[k].children;
  
              for (let l = 0; l < deepText.length; l += 1) {
                temp.push(deepText[l].innerText.toLowerCase());
              }
            }
          }
        }
        recipesText.push(temp);
      }

      for (let m = 0; m < recipesText.length; m += 1) {
        let displayRecipe = false;
        const currentRecipeText = recipesText[m];

        // display recipes that contain the input in the search bar
        for (let n = 0; n < currentRecipeText.length; n += 1) {
          if (currentRecipeText[n].includes(searchBar.value.toLowerCase())) {
            displayRecipe = true;
          }
        }
  
        if (displayRecipe === true) {
          recipeTiles[m].style.display = 'block';
        }
      }
    }
  });
}

export default search;