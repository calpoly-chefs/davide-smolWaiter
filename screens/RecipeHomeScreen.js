import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import RecipeCard from "../components/RecipeCard";
import Recipes from "../constants/SomeRecipes";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };
  render() {
    const recipes = Recipes(); // TODO: set up with redux
    return (
      // Main Container
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <RecipeCard recipe={recipes[0]} navigation={this.props.navigation} />
          <RecipeCard recipe={recipes[2]} navigation={this.props.navigation} />
        </ScrollView>
      </View>
      // End of -- Main Container
    );
  }
}

// Style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
