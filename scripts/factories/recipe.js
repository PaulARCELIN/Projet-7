function recipeFactory(recipeData) {
    
    const { name, ingredients, time, description } = recipeData;
    
    const totalRecipeCard = document.createElement('div')
    totalRecipeCard.classList.add('totalRecipeCard')
    totalRecipeCard.classList.add('card')
    
    const topRecipeCard = document.createElement('div')
    topRecipeCard.classList.add('topRecipeCard')
    totalRecipeCard.appendChild(topRecipeCard)

    const recipeCard = document.createElement('div')
    recipeCard.classList.add('recipeCard');
    

        const cardHeader = document.createElement('div')
        cardHeader.classList.add('cardHeader')
        cardHeader.classList.add('card-body')
        
            const title = document.createElement('h2')
            title.textContent = name
            title.classList.add('card-title')
            cardHeader.appendChild(title)

            const watch = document.createElement('i')
            watch.classList.add('fa-regular', 'fa-clock')
            cardHeader.appendChild(watch)

            const timer = document.createElement('p')
            timer.textContent = time + " min"
            cardHeader.appendChild(timer)
        
        recipeCard.appendChild(cardHeader)

        const cardContent = document.createElement('div')
        cardContent.classList.add('cardContent')
        
            const ingredientList = document.createElement('ul')
            
                ingredients.forEach(element => {
                    const item = document.createElement('li')
                    const name = document.createElement('str')
                    const quantity = document.createElement('p')
                    name.classList.add('ingredients-name')
                    name.textContent = element.ingredient
                    function list() {
                       if(element.quantity === undefined) {
                        quantity.textContent = ""
                       }
                       else if (element.unit === undefined) {
                        quantity.textContent = ": "+ element.quantity
                       } 
                       else 
                            quantity.textContent = ": "+ element.quantity +" "+ element.unit
                    };
                    list();

                    item.appendChild(name)
                    item.appendChild(quantity)
                    ingredientList.appendChild(item)
                });
            
            cardContent.appendChild(ingredientList)
            
            const recipeDescription = document.createElement('p')
            recipeDescription.classList.add('description')
            recipeDescription.textContent = description      
            cardContent.appendChild(recipeDescription)

        recipeCard.appendChild(cardContent)
    totalRecipeCard.appendChild(recipeCard)

    return totalRecipeCard
}