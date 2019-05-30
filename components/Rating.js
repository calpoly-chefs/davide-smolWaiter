import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { getDefaultMiddleware } from "redux-starter-kit";

export default class Rating extends React.Component {
  // props:
  //   rating - integer representing the current rating for a recipe
  //            (the number of stars to fill)

  //   TODO:
  //      - add support for dynamic sizing
  //      - write function to display variable number of filled stars

  getStars = (fillNum, dim) => {
    var numStar = [1, 2, 3, 4, 5];
    return numStar.map(num => {
      if (num <= fillNum) {
        return (
          <Image
            style={style(dim).star}
            source={require("../assets/images/starFilled.png")}
          />
        );
      } else {
        return (
          <Image
            style={style(dim).star}
            source={require("../assets/images/star.png")}
          />
        );
      }
    });
  };

  render() {
    const fillNum = this.props.fillNum;
    const dim = this.props.dimension;
    return <View style={style(dim).parent}>{this.getStars(fillNum, dim)}</View>;
  }
}

const style = dim =>
  StyleSheet.create({
    parent: {
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    },

    star: {
      width: dim,
      height: dim
    }
  });
