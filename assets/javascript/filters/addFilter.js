import removeFilter from './removeFilter.js';

function addFilter() {
  const options = Array.from(document.querySelectorAll('.datalist option'));
  const filters = document.getElementById('filters');

  options.forEach(option => {
    option.addEventListener('mousedown', () => {
      const filterCategory = option.classList[0];
      filters.insertAdjacentHTML('beforeend', `<span class="filters__item filters__item--${filterCategory}">${option.value}</span>`);
      // option.remove(); //TODO add them back in removeFilter
      removeFilter();
    });
  });
}

export default addFilter;