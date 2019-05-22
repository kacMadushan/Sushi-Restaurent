import React from 'react';

class AddRecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formErrors: undefined
        }

        this.handleAddNewRecipe = this.handleAddNewRecipe.bind(this);
        this.recipeUrl = React.createRef();
        this.recipeName = React.createRef();
        this.recipePrice = React.createRef();
        this.category = React.createRef();
    }

    handleAddNewRecipe(e) {
        e.preventDefault();
        const url = this.recipeUrl.current.value;
        const name = this.recipeName.current.value;
        const price = this.recipePrice.current.value;
        const category = this.category.current.value;

        const formErrors = this.props.handleAddNewRecipe(url, name, price, category);
        this.setState({ formErrors });
        this.recipeUrl.current.focus();

        if(!formErrors) {
            this.recipeUrl.current.value = '';
            this.recipeName.current.value = '';
            this.recipePrice.current.value = '';
            this.category.current.value = "Select Category";
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddNewRecipe}>
                {this.state.formErrors && <p className="error-msg">{this.state.formErrors}</p>}
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label>Recipe Image URL</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Recipe URL" 
                                ref={this.recipeUrl}
                            />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="form-group">
                            <label>Recipe Name</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Recipe Name"
                                ref={this.recipeName} 
                            />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label>Recipe Price</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Recipe Price" 
                                ref={this.recipePrice}
                            />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label>Select Category</label>
                            <select className="form-control" ref={this.category}>
                                <option defaultValue="Select Category">Select Category</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-4 offset-sm-8">
                        <button className="default-type">Add Recipe</button>
                    </div>
                </div>
            </form>
        )
    }
};

export default AddRecipeForm;