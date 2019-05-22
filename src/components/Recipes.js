import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

export default function Recipes(props) {
    const { recipes, filterOption, allRecipes } = props;
    const recipesList = recipes.map(({id, recipeUrl, recipeName, recipePrice, category}) => 
        <Recipe 
            key={id}
            recipeImg={recipeUrl}
            recipeName={recipeName}
            recipePrice={recipePrice}
            recipeCategory={category}
        />
    );
    const allRecipesList = allRecipes.map(({id, recipeUrl, recipeName, recipePrice, category}) => 
        <Recipe 
            key={id}
            recipeImg={recipeUrl}
            recipeName={recipeName}
            recipePrice={recipePrice}
            recipeCategory={category}
        />
    );
    return (
        <div className="row">
            {filterOption ===  'All' ? allRecipesList:  recipesList }
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array,
    filterOption: PropTypes.string,
    allRecipes: PropTypes.array
};