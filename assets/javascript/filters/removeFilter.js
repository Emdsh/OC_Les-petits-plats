function removeItem() {
  this.remove();
}

function removeFilter() {
  const filters = document.querySelectorAll('.filters__item');

  filters.forEach(filter => {
    filter.removeEventListener('click', removeItem);
    filter.addEventListener('click', removeItem);
  });
}

export default removeFilter;