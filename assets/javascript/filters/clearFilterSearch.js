function clearFilterSearch() {
  const inputs = document.querySelectorAll('.selectors__item');

  inputs.forEach(input => {
    input.addEventListener('focusout', () => {
      input.value = '';
    });
  });
}

export default clearFilterSearch;