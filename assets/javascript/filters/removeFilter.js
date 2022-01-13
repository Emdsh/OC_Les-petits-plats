import addFilter from './addFilter.js';

function removeItem() {
  const filterCategory = Array.from(this.classList).filter(cls => cls.includes('--'))[0].replace(/\w+\-{2}/,'');
  const datalist = document.getElementById(`${filterCategory}s-list`);
  datalist.insertAdjacentHTML('beforeend', `<option value="${this.innerText.toLowerCase()}" class="${filterCategory}">${this.innerText.toLowerCase()}</option>`);
  addFilter();
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