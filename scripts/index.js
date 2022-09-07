// Tableau des recettes à afficher
let displayedRecipes = []
// Tableau des filtres actifs
let activeFilters = []

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


// Fonction pour afficher le dropdown ingrédients
function displayIngredientsFilters() {
    
    const uniqueIngredientsList = ingredientsList(displayedRecipes);

    const container = document.getElementById('ingredients_filter')
    container.innerHTML = ""
    const ingredientFilter = createFilterDropdown("Ingredients", [uniqueIngredientsList])

    container.appendChild(ingredientFilter)
}

// Fonction pour afficher le dropdown appareils
function displayAppliancesFilters() {
    
    const uniqueAppliancesList = appliancesList(displayedRecipes);

    const container = document.getElementById('appliances_filter')
    container.innerHTML = ""
    const applianceFilter = createFilterDropdown("Appareils", [uniqueAppliancesList])

    container.appendChild(applianceFilter)
}

// Fonction pour afficher le dropdown ustensils
function displayUstensilsFilters() {
    
    const uniqueUstensilsList = ustensilsList(displayedRecipes);

    const container = document.getElementById('ustensils_filter')
    container.innerHTML = ""
    const ustensilFilter = createFilterDropdown("Ustensiles", [uniqueUstensilsList])

    container.appendChild(ustensilFilter)
}


// Fonction pour afficher la galerie de recettes
function displayRecipesGallery(recipes, searchBarInput="") {
    const container = document.getElementById('recipes_gallery')
    container.innerHTML = ""
    
    displayedRecipes = []
    

// ALGO 1

   /*  displayedRecipes = recipes.filter(element => {
        return (searchBarAlgo(searchBarInput, element) && searchFiltersAlgo(activeFilters, element))  
    }); */


// ALGO 2

    for (let element of recipes) {
        if(searchBarAlgo(searchBarInput, element) && searchFiltersAlgo(activeFilters, element)){
            displayedRecipes.push(element)
        }
    }


// Un affiche chaque recette du tableau 'displayed recipes'    
    displayedRecipes.forEach(element => {
        const recipeCard = recipeFactory(element);
        container.appendChild(recipeCard)
    })
}


//Fonction 'init' pour afficher les éléments de départ
function init() {
    displaySearchBar();
    displayRecipesGallery(recipes);
    displayIngredientsFilters();
    displayAppliancesFilters();
    displayUstensilsFilters();
    filter();
}

init();










