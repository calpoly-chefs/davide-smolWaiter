import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FileText } from "react-feather";
import Annotation from "./Annotation.js";
import { Field, FieldArray, reduxForm } from "redux-form";
import MyTextInput from "./MyTextInput";
import { connect } from "react-redux";

// TODO: refactor (see shared code => ./component/Step)
class Ingredient extends React.Component {
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
    const hasAnno = annotations.length > 0 ? true : false

    return (
      <View style={ing_styles.container}>
        {/* Ingredient */}
        <TouchableWithoutFeedback onPress={() => this._toggleAnnotation(this.props.edit)}>
          <View style={ing_styles.ing}>
            <Text style={ing_styles.ing_text}>{text}</Text>
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

const ing_styles = StyleSheet.create({
  container: {
    marginTop: 8, // adds white space above component
  },
  ing: {
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: "#F0F0EA"
  },
  ing_text: {
    padding: 15,
    fontSize: 16
  }
});

export default connect(state => ({ recipe: state.recipe }))(Ingredient);
