// clear the input once the user focuses out of the search bar
function clearFilterSearch() {
  const inputs = document.querySelectorAll('.selectors__item');

  inputs.forEach((input) => {
    input.addEventListener('focusout', () => {
      input.value = '';
    });
  });
}

export default clearFilterSearch;
