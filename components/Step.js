import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Annotation from "./Annotation.js";
import { connect } from "react-redux";

// TODO: refactor (see shared code => ./component/Ingredient)
class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAnno: false,
    };
  }

  _toggleAnnotation(edit) {
    if (edit) {
      this.setState({ hasAnno: !this.state.hasAnno })
    }
  }

  render() {
    const annotations = this.props.annotations;
    const text = this.props.text;
    const stepNum = this.props.stepNum;
    const hasAnno = annotations.length > 0 ? true : false;

    return (
      <View style={step_styles.container}>
        {/* Step */}
        <TouchableWithoutFeedback onPress={() => this._toggleAnnotation(this.props.edit)}>
          <View>
            <View style={step_styles.step}>
              <Text style={step_styles.step_text}>{text}</Text>
            </View>
            <View style={step_styles.id}>
              <Text style={step_styles.id_text}>{stepNum}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* Annotation */}
        {hasAnno ? annotations.map((anno) =>
          // annotation exists
          <Annotation annotation={anno} id={this.props.id} edit={this.props.edit} />) :
          // new annotation
          <Annotation annotation={""} id={this.props.id} edit={this.props.edit} hide={!this.state.hasAnno} />
        }
      </View>
    );
  }
}

const step_styles = StyleSheet.create({
  container: {
    marginTop: 10, // adds white space above component
  },

  // TODO: use flex-box styling rather than hardcoded values
  id: {
    position: "absolute",
    top: 0,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#000"
  },

  id_text: {
    paddingTop: 7,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  },

  step: {
    marginLeft: 12, // shifts step left to accomidate id
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: "#F0F0EA"
  },

  step_text: {
    padding: 15,
    fontSize: 16
  }
});

export default connect(state => ({ recipe: state.recipe }))(Step);
