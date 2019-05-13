import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Annotation extends React.Component {
  render() {
    const text = this.props.text;
    const date = this.props.date;
    return (
      <View style={anno_styles.container}>
        <Text style={anno_styles.anno_text}>{this.props.text}</Text>
        <Text style={anno_styles.anno_date}>{this.props.date}</Text>
      </View>
    );
  }
}

const anno_styles = StyleSheet.create({
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
    fontSize: 14,
    fontWeight: "bold"
  },

  anno_date: {
    paddingLeft: 15,
    paddingTop: 2,
    paddingRight: 15,
    paddingBottom: 10,
    fontSize: 10,
    color: "grey"
  }
});
