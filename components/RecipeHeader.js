import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";

export default class RecipeHeader extends Component {
  render() {
    const recipes = this.props.recipes;
    var tags = this.props.tags;

    return (
      <View style={rh_styles.header} contentContainerSytle={rh_styles.content}>
        <Text style={rh_styles.title}> {recipes[2]["title"]} </Text>
        {/* <View className="rating"><Star /><Star /><Star /><Star /><Star /></View> */}
        <Text style={rh_styles.author}>Mel's Kitchen</Text>
        <Text style={rh_styles.time}>
          Prep Time: {recipes[2].prepTime + " minutes"}, Cook Time:{" "}
          {recipes[2].diffTime + " min"}
        </Text>
      </View>
    );
  }
}

const rh_styles = StyleSheet.create({
  header: {
    margin: 15,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  content: {
    paddingHorizontal: 100
  },

  title: {
    fontSize: 20
  },

  rating: {
    // left: "0%",
    // right: "65.77%",
    // top: "45.24%",
    // bottom: "41.27%"
  },

  author: {
    marginLeft: 4,
    fontSize: 16
  },

  time: {
    fontSize: 13,
    marginLeft: 4,
    textAlign: "left"
  },

  tags: {
    fontSize: 13
  }
});
