import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FileText, Bold, AlignCenter } from "react-feather";

export default class Step extends React.Component {
  render() {
    return (
      <View style={step_styles.container}>
        <View style={step_styles.childTextContainer}>
          <Text style={step_styles.step_text}>{this.props.text}</Text>
        </View>
        <View style={step_styles.childIdContainer}>
          <Text style={step_styles.id_text}>{this.props.id}</Text>
        </View>
      </View>
    );
  }
}

const step_styles = StyleSheet.create({
  // FIXME: this styling is redundent
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },

  childIdContainer: {
    position: "absolute",
    top: 0,
    alignItems: "flex-start",
    backgroundColor: "#000",
    width: 30,
    height: 30,
    borderRadius: 20
  },

  childTextContainer: {
    marginLeft: 12,
    marginTop: 10,
    alignItems: "flex-start",
    backgroundColor: "#F0F0EA",
    borderRadius: 7,
    justifyContent: "space-around"
  },

  step_text: {
    padding: 15,
    fontSize: 14
  },

  id_text: {
    paddingTop: 6,
    paddingLeft: 10.5,
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  }
});
