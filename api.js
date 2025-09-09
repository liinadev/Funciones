
function getcocktails(search = "") {
    const api_url = "https://www.thecocktaildb.com/api/json/v1";
    const search_for_cocktails_end_point = "/1/search.php";
    let params = search.length ? "?s=" + search : window.location.search;

    params = params.length ? params : "?f=a";


    const promise = fetch(api_url + search_for_cocktails_end_point + params);
    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (response2) {
            document.getElementById("resultado").innerHTML = "";
            for (const key in response2) {
                const element = response2[key];

                if (key !== "drinks") {
                    document.getElementById("resultado").innerHTML += key + " " + element + "<br>";
                }

                if (key === "drinks") {
                    response2.drinks.forEach(function (cocktail, i) {
                        document.getElementById("resultado").innerHTML +=
                            "<div class='card'>" + (i + 1) +
                            ": ID " + cocktail.idDrink + "<br>" + cocktail.strDrink + " - " +
                            cocktail.strCategory + "<br>" +
                            "<img src='" + cocktail.strDrinkThumb
                            + "' width='200' onclick='mostrarDetalles(" + i + ")'>" +
                            "<a href='detalle-api.html?i=" + cocktail.idDrink + "'> ver mas </a>" +
                            "<div id='preparacion" + i + "' class='detalles' style='display:none;'>"
                            + cocktail.strInstructions +
                            "</div>" +
                            "</div>";
                    })
                }
            }
        });
}



function mostrarDetalles(id) {
    var div = document.getElementById("preparacion" + id);
    div.style.display = (div.style.display === "none") ? "block" : "none";
}

function buscarCocktail() {
    const search = document.getElementById("buscador").value || "";
    getcocktails(search);
}
getcocktails();

function cocktailsDetail(cocktailId) {
    window.location.href = "detalle-api.html" + "?i=" + cocktailId
};



