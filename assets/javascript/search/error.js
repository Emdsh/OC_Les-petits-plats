import isPageEmpty from './isPageEmpty.js';

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
