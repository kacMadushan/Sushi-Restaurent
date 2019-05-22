import React from 'react';
import uuid from 'uuid';
import { recipes, categorys } from '../api/data';
import HeroSection from '../components/HeroSection';
import Options from '../components/Options';
import Recipes from '../components/Recipes';

class SushiRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipes,
            categorys: categorys,
            searchValue: '',
            optionValue: ''
        }
    
        this.handleAddNewRecipe = this.handleAddNewRecipe.bind(this);
        this.handleSearchRecipe = this.handleSearchRecipe.bind(this);
        this.handleSelectValue = this.handleSelectValue.bind(this);
    }

    handleAddNewRecipe(url, name, price, category) {
        if(!url && !name && !price) {
            return 'Enter valid value to add new recipe'
        }
        this.setState((prevState) => (
            { recipes: prevState.recipes.concat({
                id: uuid(),
                recipeUrl: url,
                recipeName: name,
                recipePrice: price,
                category: category
            })}
        ));
    };

    handleSearchRecipe(e) {
        this.setState({ searchValue: e.target.value.substr(0, 20) });
    }

    handleSelectValue(e) {
        this.setState({ optionValue: e.target.value });
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('recipes');
            const recipes = JSON.parse(json);

            if(recipes) {
                this.setState(() => ({ recipes }));
            }

        } catch (e) {
            // nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.recipes.length !== this.state.recipes.length) {
            const json = JSON.stringify(this.state.recipes);
            localStorage.setItem('recipes', json);
        }
    }

    render() {
        const searchRecipes = this.state.recipes.filter((recipe) => {
            return recipe.recipeName.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 && 
                    recipe.category.indexOf(this.state.optionValue) !== -1;
        });

        const allRecipesFilteredList = this.state.recipes.filter((recipe) => {
            return recipe.recipeName.toLowerCase().indexOf(this.state.searchValue.toLocaleLowerCase()) !== -1;
        });

        return (
            <React.Fragment>
                <HeroSection 
                    handleAddNewRecipe={this.handleAddNewRecipe}
                />
                <div className="container">
                    <Options 
                        categorys={this.state.categorys}
                        searchValue={this.state.searchValue}
                        optionValue={this.state.optionValue}
                        handleSearchRecipe={this.handleSearchRecipe}
                        handleSelectValue={this.handleSelectValue}
                    />
                    <Recipes 
                        recipes={searchRecipes}
                        allRecipes={allRecipesFilteredList}
                        filterOption={this.state.optionValue}
                    />
                </div>
            </React.Fragment>
        );
    };
};

export default SushiRestaurant;