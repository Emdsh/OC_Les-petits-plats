function fillAppliances(recipes) {
  const appliancesSet = new Set();
  recipes.forEach(recipe => {
    appliancesSet.add(recipe.appliance.toLowerCase());
  });

  const sortAppliances = Array.from(appliancesSet).sort((a, b) => a.localeCompare(b));

  const appliancesList = sortAppliances.map(appliance => `<option value="${appliance}">${appliance}</option>`);

  const appliancesDatalist = document.getElementById('appliances-list');
  appliancesDatalist.insertAdjacentHTML('beforeend', appliancesList.join(''));
}

export default fillAppliances;