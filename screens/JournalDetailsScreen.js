import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ingredients from "../components/Ingredients.js";
import Steps from "../components/Steps.js";
import RecipeHeader from "../components/RecipeHeader.js";
import { connect } from "react-redux";

class JournalDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "A Recipe"
    // TODO: add filter button
  };

  render() {
    // this should be changed to reference the current recipe given a current recipe id
    const recipe = this.props.recipe.recipes.byId.r1;
    const ingredients = this.props.recipe.ingredients;
    const steps = this.props.recipe.steps;
    
    return (
      <ScrollView style={styles.container}>
        {/* linked to QuickActions modal, need to set up correct stack navigator*/}
        <RecipeHeader recipe={recipe} />
        <View style={styles.childContainer}>
          <Text style={styles.header}>Ingredients</Text>
          <Ingredients recipe={recipe} ingredients={ingredients}/>
        </View>
        <View style={styles.childContainer}>
          <Text style={styles.header}>Steps</Text>
          <Steps recipe={recipe} steps={steps} />
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
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "column",
    backgroundColor: "#fff"
  },

  header: {
    fontSize: 20,
    paddingTop: 10,
    // paddingLeft: 10,
    fontWeight: "bold"
  }
});

export default connect(state => ({ recipe: state.recipe }))(
  JournalDetailsScreen
);
