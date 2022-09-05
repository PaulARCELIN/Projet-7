//Fonction pour récupérer les inrgédients
function ingredientsList(recipes) {
    var ingredientsTotal = []
    recipes.forEach(element => {
        ingredientsTotal = ingredientsTotal.concat(element.ingredients)
    })
    var ingredientsList = []
    ingredientsTotal.forEach(element => {
        ingredientsList = ingredientsList.concat(element.ingredient)
    })
// Array : liste des ingrédients (sans doublons)
    var uniqueIngredientsList = ingredientsList.filter((x, i) => ingredientsList.indexOf(x) === i)
    return uniqueIngredientsList
}


//Fonction pour récupérer les ustensils 
function ustensilsList(recipes) {
    var ustensilsTotal = []
    recipes.forEach(element => {
        ustensilsTotal = ustensilsTotal.concat(element.ustensils)
    })
//Array : liste des ustensils (sans doublon)    
    var uniqueUstensilsList = ustensilsTotal.filter((x, i) => ustensilsTotal.indexOf(x) === i)
    return uniqueUstensilsList
}

//Fonction pour récupérer les appareils
function appliancesList(recipes) {
    var appliancesTotal = []
    recipes.forEach(element => {
        appliancesTotal = appliancesTotal.concat(element.appliance)
    })
//Array : liste des appareils (sans doublon)
    var uniqueAppliancesList = appliancesTotal.filter((x, i) => appliancesTotal.indexOf(x) === i)
    return uniqueAppliancesList
}

// Renvoi un string avec le nom des ingrédients d'une recipe
function getRecipeIngredientsList(recipe) {
    const ingredients = recipe.ingredients
    let list = "";
    ingredients.forEach(element => {
        list = element.ingredient.concat(list)
    })
    return list
}

//
function getRecipeUstensilsList(recipe) {
    const ustensils = recipe.ustensils
    let list = "";
    ustensils.forEach(element => {
        list = element.concat(list)
    })
    return list
}

function getRecipeAppliance(recipe) {
    const appliance = recipe.appliance
    return appliance
}


