import React from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import Ingredient from "../components/Ingredient.js";
import Step from "../components/Step.js";
import RecipeHeader from "../components/RecipeHeader.js";
import Recipes from "../constants/SomeRecipes.js";
import GlobalStyle from "../constants/GlobalStyle.js";
import Icon from "react-native-vector-icons/Feather";
import TabBarIcon from "../components/TabBarIcon";
import { createStackNavigator } from "react-navigation";

export default class RecipeDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "A Recipe",
    headerStyle: {
      marginRight: 15
    },
    // This icon isn't properly connected with the navigation (using navigation within navigationOptions)
    headerRight: (
      <Icon
        name="more-horizontal"
        color={"#000"}
        size={24}
        // no stack nagivation to QuickActions set up
        onPress={() => this.props.navigation.navigate("QuickActions")}
      />
    )
  };

  render() {
    const someRecipes = Recipes();
    return (
      <ScrollView style={styles.container}>
        {/* linked to QuickActions modal, need to set up correct stack navigator*/}
        <Icon
          name="more-horizontal"
          color={"#000"}
          size={24}
          onPress={() => this.props.navigation.navigate("QuickActions")}
        />
        <RecipeHeader recipe={someRecipes[0]} />
        <View style={styles.childContainer}>
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
        <View style={styles.childContainer}>
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
