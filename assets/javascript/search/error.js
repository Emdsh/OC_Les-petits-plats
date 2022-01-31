import isPageEmpty from './isPageEmpty.js';

// add error message if the page is empty
function error() {
  const emptyPage = isPageEmpty();
  const main = document.getElementById('main');
  const errorMessage = document.getElementById('no-result-error');

  if (emptyPage === true) {
    if (errorMessage) { return; }
    main.insertAdjacentHTML('beforeend', '<p id="no-result-error">Il n\'y a pas de résultat pour cette recherche.</p>');
  }
  if (emptyPage === false) {
    if (errorMessage) {
      errorMessage.remove();
    }
  }
}

export default error;
