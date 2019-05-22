import React from 'react';
import PropTypes from 'prop-types';

export default function Recipe(props) {
    const { recipeImg, recipeName, recipePrice, recipeCategory } = props;
    return (
        <div className="col-sm-3">
            <div className="recipe">
                <div className="recipe-image">
                    <img className="thumb" src={recipeImg} alt={recipeName} />
                </div>
                <div className="recipe-details">
                    <h3>{recipeName}</h3>
                    <span>-${recipePrice}</span>
                    <p>{recipeCategory}</p>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipeImg: PropTypes.string,
    recipeName: PropTypes.string,
    recipePrice: PropTypes.string,
    recipeCategory: PropTypes.string
};