import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import RecipeCard from "../components/RecipeCard";

import Recipes from "../constants/SomeRecipes";

export default class HomeScreen extends React.Component {
  // Header
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };
  render() {
    const recipes = Recipes();
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
    // paddingTop: 30
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
