import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import RecipeCard from "../components/RecipeCard";
import QuickActionsIcon from "../components/QuickActionsIcon";
import Rating from "../components/Rating";

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// import API from "../state/API"


// goal
// save the login token in the redux state after authenticating our user, Remy

export default class EMPTYSCREEN extends React.Component {
  changeState() {
    console.log("changing");
  }

  render() {
    // const recipe = this.props.recipe.recipes.byId.r1;
    // const u = this.props.user;
    return (
      <View style={{ marginTop: 50, background: "lightgrey" }} >
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hi there :)</Text>
        <Text style={{ textAlign: "center" }}>
          This is a blank screen for component experimentation
        </Text>
        <View>
          {/* Add your code here */}
          {/* <Text>{recipe.title}</Text> */}
          {/* <Text>Authorization token: {u.authorization}</Text> */}
          <Button
            title="Update State "
            onPress={this.changeState.bind(this)}>
          </Button>
        </View>
      </View >
    );
  }
}

// connects React Component to Redux
// (passing the entire state would be inefficient,
//    instead we pass the relavent parts of the state to each component)
// export default connect(state => ({ user: state.user }))(EMPTYSCREEN);
// export default connect(select)(EMPTYSCREEN)