// filter datalist items depending on the search bar input
function filterDatalist() {
  const inputs = document.querySelectorAll('.selectors__item');
  const datalists = Array.from(document.querySelectorAll('.datalist'));

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      // indentify the current filter
      const currentFilter = Array.from(input.classList)
        .map((c) => c.replace('selectors__', ''))
        .filter((c) => c !== 'item');
      // identify the filter's datalist
      const currentDatalist = datalists.filter((d) => d.classList
        .contains(`datalist__${currentFilter[0]}`))[0];
      const currentOptions = Array.from(currentDatalist.children);

      const text = input.value.toLowerCase();
      currentOptions.forEach((option) => {
        // hide every items
        option.style.display = 'none';
        // display items that match the search bar input
        if (option.value.indexOf(text) > -1) {
          option.style.display = 'inline-block';
        }
      });
    });
  });
}

export default filterDatalist;
