
function getcocktails() {
    const api_url = "https://www.thecocktaildb.com/api/json/v1";
    const search_for_cocktails_end_point = "/1/search.php?s=margarita";
    const promise = fetch(api_url + search_for_cocktails_end_point);
    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (response2) {
            for (const key in response2) {
                const element = response2[key];

                if (key !== "drinks") {
                    document.getElementById("resultado").innerHTML += key + " " + element + "<br>";
                }

                if (key === "drinks") {
                    document.getElementById("resultado").innerHTML += "<ul>";
                    for (const i in response2[key]) {
                        let cocktail = response2[key][i];
                        document.getElementById("resultado").innerHTML += i + ": " + " "
                            + cocktail.strDrink + " - " + cocktail.strCategory + "<br>";
                    }
                }
            }
        });
}

getcocktails();

