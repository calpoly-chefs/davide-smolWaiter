import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { fetchAllRecipes } from "../actions/actions";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  // Header
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };

  componentWillMount() {
    this.props.fetchAllRecipes();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {this.props.recipes.data.map((rec) => (
            <RecipeCard recipe={rec} navigation={this.props.navigation} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return {
      fetchAllRecipes: () => dispatch(fetchAllRecipes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)


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
