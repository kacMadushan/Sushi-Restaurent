import React from 'react';
import Slider from './Slider';
import AddRecipeForm from './AddRecipeForm';

export default function HeroSection(props) {
    const { handleAddNewRecipe } = props;
    return (
        <div className="hero-section">
            <div className="container">
                <Slider />
                <AddRecipeForm 
                    handleAddNewRecipe={handleAddNewRecipe}
                />
            </div>
        </div>
    );
};