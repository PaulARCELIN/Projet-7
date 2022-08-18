function createSearchBar() {
    const container = document.createElement('div')
    
    const searchBar = document.createElement('input')
    searchBar.classList.add('searchBar')
    searchBar.setAttribute('placeholder', 'Rechercher une recette')
    container.appendChild(searchBar)

    const loupe = document.createElement('i')
    loupe.classList.add('fa-solid', 'fa-magnifying-glass')
    container.appendChild(loupe)

    return container
}