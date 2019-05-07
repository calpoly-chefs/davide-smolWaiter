import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import Ingredient from "../components/Ingredient.js";
import Step from "../components/Step.js";
import RecipeHeader from "../components/RecipeHeader.js";
import Recipes from "../constants/SomeRecipes.js";
import GlobalStyle from "../constants/GlobalStyle.js";

export default class JournalDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "A Recipe"
    // TODO: add filter button
  };

  render() {
    const someRecipes = Recipes();
    return (
      <ScrollView style={styles.container}>
        <RecipeHeader recipe={someRecipes[0]} />
        <View contentContainerStyle={styles.childContainer}>
          <Text style={styles.header}>Ingredients</Text>
          {/* someRecipes index will need to be changed to recipe id passed in */}
          {someRecipes[0].ingredients.map(object => (
            <Ingredient
              text={
                object.quantity + " " + object.units + " " + object.ingredient
              }
              annotations={object.annotations}
            />
          ))}
        </View>
        <View contentContainerStyle={styles.childContainer}>
          <Text style={styles.header}>Steps</Text>
          {someRecipes[0].steps.map(object => (
            <Step
              id={object.stepNum}
              text={object.step}
              annotations={object.annotations}
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
    paddingVertical: 10,
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
