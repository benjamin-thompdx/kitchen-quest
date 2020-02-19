import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { KitchenService } from './../src/kitchen-service.js';

$(document).ready(function () {

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
          $(".noResult").empty();
          
          for(var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
          }
          
          response.forEach(function (value, i) {
            let row = table.insertRow(i + 1);
            let recipeCell = row.insertCell(0);
            let imageCell = row.insertCell(1);
            let ingredientsUsedCell = row.insertCell(2);
            let unusedIngredientsCell = row.insertCell(3);
            let additionalIngredientsNeededCell = row.insertCell(4);

            recipeCell.innerHTML = value.title;
            imageCell.innerHTML = `<img src=${value.image}></img>`;
            ingredientsUsedCell.innerHTML = value.usedIngredients[0].name;
            unusedIngredientsCell.innerHTML = value.unusedIngredients[0].name;
            additionalIngredientsNeededCell.innerHTML = value.missedIngredients[0].name;
          });
        } else if (response.length === 0) {
          $(".noResult").text("Sorry, no recipes found with the ingredients that you have");
        } 
      } else if (response === false) {
        $(".errors").text("Sorry, there was an error handling your request!");
      }
    }
  });
});