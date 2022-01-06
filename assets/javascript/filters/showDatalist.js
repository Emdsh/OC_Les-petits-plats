function showDatalist() {
  const inputs = document.querySelectorAll('.selectors__item');
  const datalists = Array.from(document.querySelectorAll('.datalist'));

  inputs.forEach(input => {
    input.addEventListener('focusin', () => {
      // identify the current filter
      const currentFilter = Array.from(input.classList)
        .map(c => c.replace('selectors__', ''))
        .filter(c => c != 'item');
      // identify the filter's datalist
      const currentDatalist = datalists.filter(d => d.classList
        .contains(`datalist__${currentFilter[0]}`))[0];
      currentDatalist.style.display = 'flex';
    });
  
    input.addEventListener('focusout', () => {
      datalists.forEach(datalist => {
        datalist.style.display = 'none';
      })
    });
  });
}

export default showDatalist;