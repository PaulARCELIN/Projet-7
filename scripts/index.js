// Fonction pour récupérer les données du fichier recipes.js
function getRecipes() {
    return fetch("recipes.js")
        .then (recipes => recipes.json)
        .catch(function() {
        console.log('Une erreur sur la requête')    
    });
}


// Fonction pour afficher la barre de recherche 
function displaySearchBar() {
    const container = document.getElementById('search_bar')
    const searchBar = createSearchBar()
    container.appendChild(searchBar)
}


// Fonction pour afficher les filtres
function displayFilters(recipes) {
    
    var ingredientsTotal = []
    
    recipes.forEach(element => {
        ingredientsTotal = ingredientsTotal.concat(element.ingredients)
    })

    var ingredientsList = []

    ingredientsTotal.forEach(element => {
        ingredientsList = ingredientsList.concat(element.ingredient)
    })

    var unique = ingredientsList.filter((x, i) => ingredientsList.indexOf(x) === i)

    console.log(unique)

    const container = document.getElementById('filter_options')
    const ingredientFilter = createFilterDropdown("ingredient", [unique])
    
    
    console.log(ingredientFilter)
    
    container.appendChild(ingredientFilter)
}


// Fonction pour afficher la galerie de recettes
function displayRecipesGallery(recipes) {
    const container = document.getElementById('recipes_gallery')

    recipes.forEach(element => {
        const recipeCard = recipeFactory(element);
        container.appendChild(recipeCard)
    });
    
}


function init() {
    displaySearchBar();
    displayRecipesGallery(recipes);
    displayFilters(recipes);
}

init();










