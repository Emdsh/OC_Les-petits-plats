async function getRecipes() {
  try {
    const response = await fetch('api/api.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default getRecipes;