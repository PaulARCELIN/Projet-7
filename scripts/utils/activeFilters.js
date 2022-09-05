    function createActiveFilter(filter, className) {
        
        const allFiltersContainer = document.getElementById("active_filters")
        //allFiltersContainer.innerHTML = ""

        const filterContainer = document.createElement('div'); 
        filterContainer.classList.add('filterContainer')
        filterContainer.classList.add('color-' + className)
       
        const filterName = document.createElement('p');
        filterName.textContent = filter;
        
        filterContainer.appendChild(filterName)

        const filterClose = document.createElement('i');
        filterClose.classList.add('fa-regular', 'fa-circle-xmark')
        filterContainer.appendChild(filterClose)

        
        filterClose.onclick = () => {
            const searchBar = document.getElementById('search_input')
            filterContainer.remove()
            let index = activeFilters.indexOf(filter)
            if (index !== -1) {
                activeFilters.splice(index, 1);
            }
            console.log(activeFilters)
            displayRecipesGallery(recipes, searchBar.value, activeFilters)
            displayIngredientsFilters(recipes, displayedRecipes)
            displayUstensilsFilters(recipes, displayedRecipes)
            displayAppliancesFilters(recipes, displayedRecipes)
        }
        
        allFiltersContainer.appendChild(filterContainer)
       //return filterContainer
    }

