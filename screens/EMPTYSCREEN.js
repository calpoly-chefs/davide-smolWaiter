import React from "react";
import { View, Text, Button } from "react-native";
import RecipeCard from "../components/RecipeCard";
import QuickActionsIcon from "../components/QuickActionsIcon";
import Rating from "../components/Rating";
import { connect } from "react-redux";

// Add your imports here
import counter from "../state/CounterSlice";

class EMPTYSCREEN extends React.Component {
  render() {
    const recipe = this.props.recipe.recipes.byId.r1;
    return (
      <View style={{ marginTop: 50, background: "lightgrey" }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hi there :)</Text>
        <Text style={{ textAlign: "center" }}>
          This is a blank screen for component experimentation
        </Text>
        <View>
          {/* Add your code here */}
          <Text>{recipe.title}</Text>
        </View>
      </View>
    );
  }
}

// connects React Component to Redux
// (passing the entire state would be inefficient,
//    instead we pass the relavent parts of the state to each component)
export default connect(state => ({ recipe: state.recipe }))(EMPTYSCREEN);
