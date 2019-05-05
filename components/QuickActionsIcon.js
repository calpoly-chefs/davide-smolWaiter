import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default class QuickActionsIcon extends React.Component {
  // props:
  //   subtext - text display under icon
  //   source - path of the icon

  render() {
    return (
      <View style={style.parent}>
        <View style={style.child}>
          <Image style={style.image} source={this.props.source} />
          <Text>{this.props.subtext}</Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  parent: {
    flex: 0,
    height: 100,
    paddingHorizontal: 20
    // backgroundColor: "red"
  },
  child: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: {
    width: 40,
    height: 40
  }
});
