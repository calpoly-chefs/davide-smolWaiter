import React from "react";
import { View, Text, Button } from "react-native";
import RecipeCard from "../components/RecipeCard";
import QuickActionsIcon from "../components/QuickActionsIcon";
import Rating from "../components/Rating";

// Don't forget to import it either!

export default class EMPTYSCREEN extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 50, background: "lightgrey" }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hi there :)</Text>
        <Text style={{ textAlign: "center" }}>
          This is a blank screen for component experimentation{" "}
        </Text>

        <View>{/* Add your code here */}</View>
      </View>
    );
  }
}

// TEST BUTTON
//
{
  /* <Button
onPress={() =>
  this.props.navigation.navigate("SCREEN_NAME")
}
title="Test"
/> */
}

// TEST FLEX
//
{
  /* <View 
    style={{
        flex: 1, 
        flexDirection: "row", 
        backgroundColor: "red"}}>
</View>  */
}
