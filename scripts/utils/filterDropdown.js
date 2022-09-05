
function createFilterDropdown(title, itemList) {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('dropdownContainer')
       

    const sousContainer  = document.createElement('div')
    sousContainer.classList.add('dropdownSousContainer')
    menuContainer.appendChild(sousContainer)

    function dropdown() {
        
        if(buttonIcon.classList.contains('fa-chevron-down')) {
            buttonIcon.classList.remove('fa-chevron-down');
            buttonIcon.classList.add('fa-chevron-up');
            menuList.style.display = "block";
        }
        else {
            buttonIcon.classList.add('fa-chevron-down');
            buttonIcon.classList.remove('fa-chevron-up');
            menuList.style.display = "none";
        }
    };

    const menuInput = document.createElement('input');
    menuInput.classList.add('menu-button');
    menuInput.setAttribute('placeholder', title)
    menuInput.onclick = dropdown;
    sousContainer.appendChild(menuInput);

    const buttonIcon = document.createElement('i');
    buttonIcon.classList.add('chevron-dropdown')
    buttonIcon.classList.add('fa-solid', 'fa-chevron-down');
    buttonIcon.onclick = dropdown;
    sousContainer.appendChild(buttonIcon);

    

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    menuList.style.display = "none";

    
    menuContainer.appendChild(menuList);

    
    itemList[0].forEach(function displayList(item) {
        const option = document.createElement('li');
        option.classList.add('filter-option')
        option.textContent = item;
        option.onclick = function list() {
            const searchBar = document.getElementById('search_input')
            menuList.style.display = "none";
            buttonIcon.classList.add('fa-chevron-down');
            buttonIcon.classList.remove('fa-chevron-up');
            activeFilters.push(item)
            createActiveFilter(item, title);
            //displayActiveFilters();
            console.log(activeFilters)
            displayRecipesGallery(recipes, searchBar.value, activeFilters)
            displayIngredientsFilters(recipes, displayedRecipes)
            displayUstensilsFilters(recipes, displayedRecipes)
            displayAppliancesFilters(recipes, displayedRecipes)
        }; 
        menuList.appendChild(option);
    });

    menuInput.onkeyup = () => {
        menuList.innerHTML = ""
        itemList[0].forEach(item => {
            if(menuInput.value.length === 0 || item.includes(menuInput.value)) {
                const option = document.createElement('li');
                option.classList.add('filter-option')
                option.textContent = item;
                option.onclick = function list() {
                    const searchBar = document.getElementById('search_input')
                    menuList.style.display = "none";
                    buttonIcon.classList.add('fa-chevron-down');
                    buttonIcon.classList.remove('fa-chevron-up');
                    activeFilters.push(item)
                    createActiveFilter(item, title);
                    //displayActiveFilters();
                    console.log(activeFilters)
                    displayRecipesGallery(recipes, searchBar.value, activeFilters)
                    displayIngredientsFilters(recipes, displayedRecipes)
                    displayUstensilsFilters(recipes, displayedRecipes)
                    displayAppliancesFilters(recipes, displayedRecipes)
                }; 
            menuList.appendChild(option);
            }
        })
    }

    

    return menuContainer
}

