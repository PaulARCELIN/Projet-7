function displaySearchBar() {
    const container = document.getElementById('search_bar')
    const searchBar = createSearchBar()
    container.appendChild(searchBar)
}

function init() {
    displaySearchBar()
}

init();