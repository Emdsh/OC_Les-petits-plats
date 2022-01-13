import filter from '../search/filter.js';
import removeFilter from './removeFilter.js';

function addItem() {
  const filters = document.getElementById('filters');
  const filterCategory = this.classList[0];
  filters.insertAdjacentHTML('beforeend', `<span class="filters__item filters__item--${filterCategory}">${this.value}</span>`);
  this.remove();
  filter();
  removeFilter();
}

function addFilter() {
  const options = Array.from(document.querySelectorAll('.datalist option'));

  options.forEach(option => {
    option.removeEventListener('mousedown', addItem);
    option.addEventListener('mousedown', addItem);
  });
}

export default addFilter;