    //Fonction pour créer un filtre actif (conteneur + ajout du filtre au tableau des filtres actifs)
    function createActiveFilter(filter, className) {
        
        const allFiltersContainer = document.getElementById("active_filters")
        

        const filterContainer = document.createElement('div'); 
        filterContainer.classList.add('filterContainer')
        filterContainer.classList.add('color-' + className)
       
        const filterName = document.createElement('p');
        filterName.textContent = filter;
        
        filterContainer.appendChild(filterName)

        const filterClose = document.createElement('i');
        filterClose.classList.add('fa-regular', 'fa-circle-xmark')
        filterContainer.appendChild(filterClose)

        
        //Fonction pour retirer le filtre actif 
        filterClose.onclick = () => {
            const searchBar = document.getElementById('search_input')
            // On retire le conteneur
            filterContainer.remove()
            // On retire le filtre du tableau 'activeFilters'
            let index = activeFilters.indexOf(filter)
            if (index !== -1) {
                activeFilters.splice(index, 1);
            }
            console.log(activeFilters)
            //On rappel les fonctions d'affichage 
            displayRecipesGallery(recipes, searchBar.value, activeFilters)
            displayIngredientsFilters(recipes, displayedRecipes)
            displayUstensilsFilters(recipes, displayedRecipes)
            displayAppliancesFilters(recipes, displayedRecipes)
        }
        
        allFiltersContainer.appendChild(filterContainer)
    }

