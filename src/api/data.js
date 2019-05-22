import uuid from 'uuid';

export const categorys = ['Breakfast', 'Lunch', 'Dinner'];

export const recipes = [
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/12774636_f520.jpg', 
        recipeName: 'Ahi (tuna)',
        recipePrice: '50',
        category: 'Lunch'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/12774634_f520.jpg', 
        recipeName: 'Ebi (shrimp)',
        recipePrice: '20',
        category: 'Breakfast'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/13446257_f520.jpg', 
        recipeName: 'Sake (salmon)',
        recipePrice: '30',
        category: 'Lunch'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/12828262_f520.jpg', 
        recipeName: 'Unagi',
        recipePrice: '40',
        category: 'Dinner'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/12828263_f520.jpg', 
        recipeName: 'Hamachi',
        recipePrice: '55',
        category: 'Dinner'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/12828269_f520.jpg', 
        recipeName: 'Ika (squid)',
        recipePrice: '45',
        category: 'Breakfast'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/12828271_f520.jpg', 
        recipeName: 'Kani (crab meat)',
        recipePrice: '60',
        category: 'Lunch'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/12828273_f520.jpg', 
        recipeName: 'Tako (octopus)',
        recipePrice: '70',
        category: 'Dinner'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/12834514.jpg', 
        recipeName: 'Uni (sea urchin)',
        recipePrice: '25',
        category: 'Lunch'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/13446258_f520.jpg', 
        recipeName: 'Tempura Roll',
        recipePrice: '80',
        category: 'Lunch'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent2.hubstatic.com/12774631_f520.jpg', 
        recipeName: 'California Roll',
        recipePrice: '80',
        category: 'Dinner'
    },
    {
        id: uuid(),
        recipeUrl: 'https://usercontent1.hubstatic.com/12834522_f520.jpg', 
        recipeName: 'Unagi Sushi',
        recipePrice: '80',
        category: 'Lunch'
    },
];