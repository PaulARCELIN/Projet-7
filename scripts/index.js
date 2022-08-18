function getRecipes() {
    // Penser à remplacer par les données récupérées dans le json
    return fetch("recipes.js")
        .then (recipes => recipes.json)
        .catch(function() {
        console.log('Une erreur sur la requête')    
    });
}

function displaySearchBar() {
    const container = document.getElementById('search_bar')
    const searchBar = createSearchBar()
    container.appendChild(searchBar)
}

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
}

init();










