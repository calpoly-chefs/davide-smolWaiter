import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FileText } from "react-feather";
import Annotation from "./Annotation.js";

export default class Ingredient extends React.Component {
  render() {
    return (
      <View style={ing_styles.container}>
        <View style={ing_styles.childContainer}>
          <Text style={ing_styles.ing_text}>{this.props.text}</Text>
        </View>
        {this.props.annotations.slice(0, 1).map(object => (
          <Annotation date={object.date} text={object.text} />
        ))}
      </View>
    );
  }
}

const ing_styles = StyleSheet.create({
  // FIXME: this styling is redundent
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  childContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: "flex-start",
    backgroundColor: "#F0F0EA",
    borderRadius: 7
  },
  ing_text: {
    padding: 15,
    fontSize: 14
  }
});
