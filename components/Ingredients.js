import React from "react";
import Ingredient from "../components/Ingredient.js";

export default class Ingredients extends React.Component {

    render() {
        const recipe = this.props.recipe
        const ingredients = this.props.ingredients 
        var IngredientIDs = recipe.ingredients;

        return IngredientIDs.map(id => {
            const ingredient = ingredients.byId[id];
    
            return (
                <Ingredient
                    text={`${ingredient.quantity} ${ingredient.units} ${
                        ingredient.ingredient
                    }`}
                    annotations={ingredient.annotations}
                    edit={false}
                />
            );
        });
    }
}