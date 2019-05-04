import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Annotation extends React.Component {
  render() {
    return (
      <View style={anno_styles.container}>
        <Text style={anno_styles.anno_text}>{this.props.text.toString()}</Text>
        <Text style={anno_styles.anno_date}>{this.props.date.toString()}</Text>
      </View>
    );
  }
}

const anno_styles = StyleSheet.create({
  // FIXME: this styling is redundent
  container: {
    marginLeft: 15,
    marginRight: 15,
    alignItems: "flex-start",
    backgroundColor: "#fff"
  },

  container: {
    marginLeft: 30,
    marginRight: 30,
    alignItems: "flex-start",
    backgroundColor: "#FFE684",
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    justifyContent: "space-around"
  },

  anno_text: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 14
  },

  anno_date: {
    paddingLeft: 15,
    paddingTop: 2,
    paddingRight: 15,
    paddingBottom: 10,
    fontSize: 10,
    color: "grey"
  },

  id_text: {
    paddingTop: 6,
    paddingLeft: 10.5,
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  }
});
