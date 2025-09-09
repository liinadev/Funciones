
function getcocktailsDetail(lookup = "") {
  const api_url = "https://www.thecocktaildb.com/api/json/v1";
  const lookup_endpoint = "/1/lookup.php";
  let params = lookup.length ? "?i=" + lookup : window.location.search;


  const promise = fetch(api_url + lookup_endpoint + params);
  promise
    .then(function (response) {
      return response.json();
    })
    .then(function (response2) {
      document.getElementById("masDetalles").innerHTML = "";

      for (const key in response2) {
        if (key === "drinks") {
          response2.drinks.forEach(function (cocktail) {
            document.getElementById("masDetalles").innerHTML +=
              "<div class='card'>" +
              "<h2>" + cocktail.strDrink + "</h2>" +
              "<p><strong>Categoría:</strong> " + cocktail.strCategory + "</p>" +
              "<img src='" + cocktail.strDrinkThumb + "' width='250'><br>" +
              "<p><strong>Instrucciones:</strong> " + cocktail.strInstructions + "</p>" +
              "</div>";
          });
        }
      }
    });
}
getcocktailsDetail()

function devolver() {
  history.back();
}


