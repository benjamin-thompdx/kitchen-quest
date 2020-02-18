export class KitchenService {
  async getRecipeByIngredient(ingredient) {
    try {
      let response = await fetch(` https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&number=2&apiKey=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}