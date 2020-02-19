export class FridgeService {
  async getFridgeFact(trivia) {
    try {
      let response = await fetch(`https://api.spoonacular.com/food/trivia/random?query=&apiKey=${process.env.API_KEY}`)
);
      
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

// $(document).ready(function) {
// event.preventDefault();

// });