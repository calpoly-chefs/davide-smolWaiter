import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FileText } from "react-feather";
import Annotation from "./Annotation.js";
import { connect } from "react-redux";

class Ingredient extends React.Component {
  render() {
    const annotations = this.props.recipe.annotations;
    const annotationIDs = this.props.annotations;
    const text = this.props.text;
    return (
      <View style={ing_styles.container}>
        <View style={ing_styles.childContainer}>
          <Text style={ing_styles.ing_text}>{text}</Text>
        </View>
        {annotationIDs.slice(0, 1).map(id => {
          const anno = annotations.byId[id];
          return <Annotation date={anno.date} text={anno.text} />;
        })}
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

export default connect(state => ({ recipe: state.recipe }))(Ingredient);
