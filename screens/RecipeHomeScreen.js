import React from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { fetchAllRecipes } from "../state/actions";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  // Header
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };

  componentWillMount() {
    this.props.fetchAllRecipes();
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.fetchAllRecipes().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />
          }
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
    fetchAllRecipes: () => dispatch(fetchAllRecipes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

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
