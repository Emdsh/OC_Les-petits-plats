import filter from '../search/filter.js';
import addFilter from './addFilter.js';

// remove filters from below the search bar when clicked on
function removeItem() {
  const filterCategory = Array.from(this.classList).filter(cls => cls.includes('--'))[0].replace(/\w+\-{2}/,'');
  const datalist = document.getElementById(`${filterCategory}s-list`);
  // add the filter back in the datalist
  datalist.insertAdjacentHTML('beforeend', `<option value="${this.innerText.toLowerCase()}" class="${filterCategory}">${this.innerText.toLowerCase()}</option>`);
  addFilter();
  // remove the filter
  this.remove();
  // filter recipes depending on the selected filters
  filter();
}

function removeFilter() {
  const filters = document.querySelectorAll('.filters__item');

  filters.forEach(filter => {
    filter.removeEventListener('click', removeItem);
    filter.addEventListener('click', removeItem);
  });
}

export default removeFilter;