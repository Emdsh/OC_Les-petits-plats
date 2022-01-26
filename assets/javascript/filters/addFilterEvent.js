/* eslint-disable import/no-cycle */

import filter from '../search/filter.js';
import removeFilterEvent from './removeFilterEvent.js';

// add filter item below the main search bar once an item is selected on the datalist
function addItem() {
  const filters = document.getElementById('filters');
  const filterCategory = this.classList[0];
  filters.insertAdjacentHTML('beforeend', `<span class="filters__item filters__item--${filterCategory}">${this.value}</span>`);
  removeFilterEvent();
  // remove the filter from the datalist
  this.remove();
  // filter recipes depending on the selected filters
  filter();
}

function addFilterEvent() {
  const options = Array.from(document.querySelectorAll('.datalist option'));

  options.forEach((option) => {
    option.removeEventListener('mousedown', addItem);
    option.addEventListener('mousedown', addItem);
  });
}

export default addFilterEvent;
