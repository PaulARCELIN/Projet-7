let displayedRecipes = []
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


// Fonction pour afficher les filtres
function displayIngredientsFilters() {
    
    const uniqueIngredientsList = ingredientsList(displayedRecipes);

    const container = document.getElementById('ingredients_filter')
    container.innerHTML = ""
    const ingredientFilter = createFilterDropdown("ingredient", [uniqueIngredientsList])

    container.appendChild(ingredientFilter)
}

function displayAppliancesFilters() {
    
    const uniqueAppliancesList = appliancesList(displayedRecipes);

    const container = document.getElementById('appliances_filter')
    container.innerHTML = ""
    const applianceFilter = createFilterDropdown("Appareils", [uniqueAppliancesList])

    container.appendChild(applianceFilter)
}

function displayUstensilsFilters() {
    
    const uniqueUstensilsList = ustensilsList(displayedRecipes);

    const container = document.getElementById('ustensils_filter')
    container.innerHTML = ""
    const ustensilFilter = createFilterDropdown("Ustensiles", [uniqueUstensilsList])

    container.appendChild(ustensilFilter)
}

/* function displayActiveFilters(className) {
    const allFiltersContainer = document.getElementById("active_filters")
    allFiltersContainer.innerHTML = ""
    activeFilters.forEach(element => {
        const filter = createActiveFilter(element, className)
        allFiltersContainer.appendChild(filter)
    })
} */


// Fonction pour afficher la galerie de recettes
function displayRecipesGallery(recipes, searchBarInput="") {
    const container = document.getElementById('recipes_gallery')
    container.innerHTML = ""
    
    displayedRecipes = []
    

    displayedRecipes = recipes.filter(element => {
        return (searchBarAlgo(searchBarInput, element) && searchFiltersAlgo(activeFilters, element))  
    });


    displayedRecipes.forEach(element => {
        const recipeCard = recipeFactory(element);
        container.appendChild(recipeCard)
    })
}


function init() {
    displaySearchBar();
    displayRecipesGallery(recipes);
    displayIngredientsFilters();
    displayAppliancesFilters();
    displayUstensilsFilters();
    filter();
}

init();










