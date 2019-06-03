import React from "react";
import Ingredient from "../components/Ingredient.js";

export default class Ingredients extends React.Component {

    render() {
        const ingredients = this.props.ingredients 
        const edit = this.props.edit

        return ingredients.map(ingredient => {
            return (
                <Ingredient
                    text={`${ingredient.quantity} ${ingredient.units} ${
                        ingredient.ingredient
                    }`}
                    id={ingredient.id}
                    annotations={ingredient.annotations}
                    edit={edit}
                />
            );
        });
    }
}