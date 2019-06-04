import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Rating from "../components/Rating";

export default class RecipeHeader extends Component {
  render() {
    const recipe = this.props.recipe;
    // TODO: updated author with state, currently hard-coded

    return (
      <View style={rh_styles.header} contentContainerSytle={rh_styles.content}>
        <Text style={rh_styles.title}> {recipe.title} </Text>
        <View style={rh_styles.rating}>
          <Rating fillNum={recipe.rating} dimension={20} />
        </View>
        <Text style={rh_styles.author}>
          {/* {recipe.username} */}
          Auguste Gusteau
        </Text>
        <Text style={rh_styles.time}>
          Time: {makeTime(recipe.prepTime + recipe.cookTime)}
        </Text>
      </View>
    );
  }
}

const makeTime = time => {
  min = time % 60;
  hr = Math.floor(time / 60);
  if (hr == 0) {
    return min + " min";
  }
  return hr + " hr " + min + " min";
};

// const makeTitle = title => {
//   if (title.length > 36) {
//     return title.substr(0, 33) + "...";
//   }
//   return title;
// };

const rh_styles = StyleSheet.create({
  header: {
    margin: 20,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  content: {
    paddingHorizontal: 100
  },

  title: {
    marginLeft: -4,
    fontSize: 20,
    paddingBottom: 5
  },

  rating: {
    width: 110,
    paddingBottom: 5
  },

  author: {
    fontSize: 16,
    paddingBottom: 5
  },

  time: {
    fontSize: 13
  }
});
