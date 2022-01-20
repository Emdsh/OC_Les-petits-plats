// show the datalist depending on the search bar that's clicked on
function showDatalist() {
  const inputs = document.querySelectorAll('.selectors__item');
  const datalists = Array.from(document.querySelectorAll('.datalist'));

  inputs.forEach((input) => {
    // when the user focuses on the search bar
    input.addEventListener('focusin', () => {
      // identify the current filter
      const currentFilter = Array.from(input.classList)
        .map((c) => c.replace('selectors__', ''))
        .filter((c) => c !== 'item');
      // identify the filter's datalist
      const currentDatalist = datalists.filter((d) => d.classList
        .contains(`datalist__${currentFilter[0]}`))[0];
      // display the datalist
      currentDatalist.style.display = 'flex';
    });

    // when the user focuses out of any search bar
    input.addEventListener('focusout', () => {
      // hide datalists
      datalists.forEach((datalist) => {
        datalist.style.display = 'none';
      });
    });
  });
}

export default showDatalist;
