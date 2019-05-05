import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default class Rating extends React.Component {
  // props:
  //   rating - integer representing the current rating for a recipe
  //            (the number of stars to fill)

  //   TODO:
  //      - add support for dynamic sizing
  //      - write function to display variable number of filled stars

  render() {
    return (
      <View style={style.parent}>
        <View style={style.child}>
          <Image
            style={style.star}
            source={require("../assets/images/star.png")}
          />
          <Image
            style={style.star}
            source={require("../assets/images/star.png")}
          />
          <Image
            style={style.star}
            source={require("../assets/images/star.png")}
          />
          <Image
            style={style.star}
            source={require("../assets/images/star.png")}
          />
          <Image
            style={style.star}
            source={require("../assets/images/star.png")}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  parent: {
    flex: 0,
    height: 60
    // paddingHorizontal: 20
    // backgroundColor: "red"
  },
  child: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60
    // paddingHorizontal: 10
    // backgroundColor: "green"
  },
  star: {
    width: 35,
    height: 35
  }
});
