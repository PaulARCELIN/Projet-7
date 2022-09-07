// Fonction qui rappel les fonctions d'affichage lorsqu'on rentre un charactère dans la barre de recherche
function filter() {
    const searchBar = document.getElementById('search_input')
    searchBar.onkeyup = function filteredDisplay() {
        displayRecipesGallery(recipes, searchBar.value)
        displayIngredientsFilters(recipes, displayedRecipes)
        displayUstensilsFilters(recipes, displayedRecipes)
        displayAppliancesFilters(recipes, displayedRecipes)
    }
}
    
//Filtre de la barre de recherche 
function searchBarAlgo(input, element) {
    //On récupère la liste des ingrédients 
    const recipeIngredientsList = getRecipeIngredientsList(element)
    //On récupère la liste d'ustensils
    const recipeUstensilsList = getRecipeUstensilsList(element)
    
    // Renvoi 'true' si la recette correspond à l'une des conditions : 
    if((input.length < 3) || (element.name.toUpperCase().includes(input.toUpperCase()) || recipeIngredientsList.toUpperCase().includes(input.toUpperCase()) || recipeUstensilsList.toUpperCase().includes(input.toUpperCase()) || element.description.toUpperCase().includes(input.toUpperCase()))) {
        return true
    }
    else {
        return false
    }  
}

//Fonction des filtres actifs 
function searchFiltersAlgo(filters, recipe){
    //On récupère la liste des ingrédients 
    const recipeIngredientsList = getRecipeIngredientsList(recipe)
    //On récupère la liste d'ustensils
    const recipeUstensilsList = getRecipeUstensilsList(recipe)
    //On récupère la liste d'appareils
    const recipeAppliance = getRecipeAppliance(recipe)
    
    //Si aucun filtre actif renvoi 'true'
    if(filters.length === 0) {
        return true
    }
    // Sinon pour chaque filtre actif, on regarde la correspondance avec la recette 
    else {

        for(let idx in filters) {
            if(recipeAppliance.includes(filters[idx]) === false && recipeUstensilsList.includes(filters[idx]) === false && recipeIngredientsList.includes(filters[idx]) === false ){
                return false
            }
        }

        return true
    } 
}

