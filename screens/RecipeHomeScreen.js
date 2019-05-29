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
import { connect } from "react-redux";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };

  // getRecipes(recipes, navigation) {
  //   // return (
  //   //   <RecipeCard recipe={recipes[0]} navigation={navigation} />
  //   // )
  //   const recipeIds = recipes.allIds;

  //   return recipeIds.map(r => {
  //     console.log(r)
  //     return (
  //       <RecipeCard
  //         recipe={recipe[r]}
  //         navigation={navigation} 
  //       />
  //     );
  //   });
  // }

  render() {
    // const recipes = this.props.recipe.recipes.byId; // TODO: set up with redux
    const recipes = Recipes();
    return (
      // Main Container
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {/* {() => getRecipes(recipes, this.props.navigation)} */}
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

// export default connect(state => ({ recipe: state.recipe }))(
//   HomeScreen
// );