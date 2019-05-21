import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ingredient from "../components/Ingredient.js";
import Step from "../components/Step.js";
import RecipeHeader from "../components/RecipeHeader.js";
import { connect } from "react-redux";

class JournalDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "A Recipe"
    // TODO: add filter button
  };

  getIngredients = (currRecipe, ingredients) => {
    var IngredientIDs = currRecipe.ingredients;
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
  };

  getSteps = (currRecipe, steps) => {
    var StepIDs = currRecipe.steps;
    return StepIDs.map(id => {
      const step = steps.byId[id];

      return (
        <Step
          id={step.stepNum}
          text={step.step}
          annotations={step.annotations}
          edit={false}
        />
      );
    });
  };

  render() {
    // this should be changed to reference the current recipe given a current recipe id
    const recipe = this.props.recipe.recipes.byId.r1;
    return (
      <ScrollView style={styles.container}>
        {/* linked to QuickActions modal, need to set up correct stack navigator*/}
        <RecipeHeader recipe={recipe} />
        <View style={styles.childContainer}>
          <Text style={styles.header}>Ingredients</Text>
          {this.getIngredients(
            this.props.recipe.recipes.byId.r1,
            this.props.recipe.ingredients
          )}
        </View>
        <View style={styles.childContainer}>
          <Text style={styles.header}>Steps</Text>
          {this.getSteps(
            this.props.recipe.recipes.byId.r1,
            this.props.recipe.steps
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 15
  },
  childContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 15,
    flexDirection: "column",
    backgroundColor: "#fff"
  },

  header: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});

export default connect(state => ({ recipe: state.recipe }))(
  JournalDetailsScreen
);
