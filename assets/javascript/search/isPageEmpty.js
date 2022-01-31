// check if page is empty
function isPageEmpty() {
  const recipes = document.querySelectorAll('.recipe-tile:not([style*="display: none;"])');
  if (recipes.length > 0) {
    return false;
  }
  return true;
}

export default isPageEmpty;
