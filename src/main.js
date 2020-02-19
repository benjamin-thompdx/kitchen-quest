import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { KitchenService } from './../src/kitchen-service.js';
import { FridgeService } from './../src/fridge-service.js';

$(document).ready(function () {

// kalepadot code below

  $("#fridgeBtn").click(function () {
    event.preventDefault();
  
   (async () => {
      let fridgeService = new FridgeService();
      const response = await fridgeService.getFridgeFact();
      console.log(response);
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        console.log(typeof response)
        $(".fridgeFact").text(`${response.text}`)
        // $(".fridgeFact").text(`${JSON.stringify(response)}`)
        // $(".fridgeFact").text(`${response}`)
      }
    }
  });
// JSON.stringify(response)
// kalepadot code above

  $("#findByIngrdients").click(function () {
    event.preventDefault();
    const ingredient = $("#userInput").val();
    $("#userInput").val("");

    (async () => {
      let kitchenService = new KitchenService();
      const response = await kitchenService.getRecipeByIngredient(ingredient);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        if (response.length > 0) {
          let table = document.getElementById("ingredientsOutput");
          response.forEach(function (value, i) {
            let row = table.insertRow(i + 1);
            let recipeCell = row.insertCell(0);
            let imageCell = row.insertCell(1);
            let ingredientsUsedCell = row.insertCell(2);
            let unusedIngredientsCell = row.insertCell(3);
            let additionalIngredientsNeededCell = row.insertCell(4);

            recipeCell.innerHTML = value.title;
            imageCell.innerHTML = value.image;
            ingredientsUsedCell.innerHTML = value.usedIngredients[0].name;
            unusedIngredientsCell.innerHTML = value.unusedIngredients[0].name;
            additionalIngredientsNeededCell.innerHTML = value.missedIngredients[0].name;
          });
        }
      }
    }
  });
});