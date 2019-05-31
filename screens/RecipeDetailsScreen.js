import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ingredient from "../components/Ingredient.js";
import Step from "../components/Step.js";
import RecipeHeader from "../components/RecipeHeader.js";
import Recipes from "../constants/SomeRecipes.js";
import QuickActionModal from "../modals/QuickActionModal";

export default class RecipeDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "A Recipe",
    headerRight: <QuickActionModal navigation={navigation} />
  });

  render() {
    const recipe = this.props.navigation.getParam('recipe', null);
    console.log(recipe);
    return (
      <ScrollView style={styles.container}>

        {/* <Text>Fetched Recipe: {JSON.stringify(recipe)}</Text> */}

        <RecipeHeader recipe={recipe} />
        <View style={styles.childContainer}>
          <Text style={styles.header}>Ingredients</Text>
          {recipe.ingredients.map(ing => (
            <Ingredient
              text={
                ing.quantity + " " + ing.units + " " + ing.ingredient
              }
              annotations={ing.annotations}
            />
          ))}
        </View>
        <View style={styles.childContainer}>
          <Text style={styles.header}>Steps</Text>
          {recipe.steps.map((step, stepNum) => (
            <Step
              stepNum={stepNum}
              text={step.step}
              annotations={step.annotations}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  childContainer: {
    flex: 1,
    paddingHorizontal: 10,
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
