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
import { connect } from 'react-redux'
import { fetchAllRecipes } from "../actions/actions"
import { MonoText } from "../components/StyledText";
import RecipeCard from "../components/RecipeCard";


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
      // Main Container
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >

          {this.props.recipes.data.map((rec) => (
            //TODO enable RecipeCard for mapping through recipes
            <RecipeCard recipe={rec} navigation={this.props.navigation} />
          ))}
          
        </ScrollView>
      </View>
      // End of -- Main Container
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
    // paddingTop: 30
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
