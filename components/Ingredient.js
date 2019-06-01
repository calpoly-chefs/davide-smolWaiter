import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FileText } from "react-feather";
import Annotation from "./Annotation.js";
import { Field, reduxForm } from "redux-form";
import MyTextInput from "./MyTextInput";
import { connect } from "react-redux";

class Ingredient extends React.Component {

  _onPress(edit, hasAnno) {
    edit && !hasAnno 
    ? Alert.alert("hello")
    : null
  }

  render() {
    const annotations = this.props.annotations;
    const text = this.props.text;
    const hasAnno = annotations.length > 0 ? true : false
    return (
      
      <View style={ing_styles.container}>
        <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit, hasAnno)}>
          <View style={ing_styles.childContainer}>
            <Text style={ing_styles.ing_text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
        {hasAnno ?
        annotations.map( (anno) => (
          <Annotation date={anno.date} text={anno.text} edit={this.props.edit}/>
        )) 
        : null}
      </View>
    );
  }
}

const ing_styles = StyleSheet.create({
  // FIXME: this styling is redundant
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  childContainer: {
    // marginLeft: 10,
    // marginRight: 10,
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
