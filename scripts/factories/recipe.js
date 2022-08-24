function recipeFactory(recipeData) {
    
    const { name, ingredients, time, description } = recipeData;
    
    const recipeCard = document.createElement('div')
    recipeCard.classList.add('recipeCard');
    recipeCard.classList.add('card')

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
                    function list() {
                       if(element.quantity === undefined) {
                        item.textContent = element.ingredient
                       }
                       else if (element.unit === undefined) {
                        item.textContent = element.ingredient +": "+ element.quantity
                       } 
                       else 
                            item.textContent = element.ingredient +": "+ element.quantity +" "+ element.unit
                    };
                    list();

                    ingredientList.appendChild(item)
                });
            
            cardContent.appendChild(ingredientList)
            
            const recipeDescription = document.createElement('p')
            recipeDescription.textContent = description      
            cardContent.appendChild(recipeDescription)

        recipeCard.appendChild(cardContent)


    return recipeCard
}