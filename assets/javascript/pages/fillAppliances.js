// fill the appliances datalist
function fillAppliances(recipes) {
  // make sure every item in the datalist are unique
  const appliancesSet = new Set();
  recipes.forEach((recipe) => {
    appliancesSet.add(recipe.appliance.toLowerCase());
  });

  // sort items alphabetically
  const sortAppliances = Array.from(appliancesSet)
    .sort((a, b) => a.localeCompare(b));

  const appliancesList = sortAppliances.map((appliance) => `<option value="${appliance}" class="appliance">${appliance}</option>`);

  const appliancesDatalist = document.getElementById('appliances-list');
  appliancesDatalist.insertAdjacentHTML('beforeend', appliancesList.join(''));
}

export default fillAppliances;
