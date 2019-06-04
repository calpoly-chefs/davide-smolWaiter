import React from "react";
import { Switch, Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FileText, Bold, AlignCenter } from "react-feather";
import Annotation from "./Annotation.js";
import { connect } from "react-redux";

class Step extends React.Component {
  // constructor() {
  //   this.state = {
  //     hasAnno: false
  //   };
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hasAnno: false,
  //   };
  // }

  _onPress(edit, hasAnno) {
    edit && !hasAnno
      ? Alert.alert("This is a step.")
      : null
    // this.setState({ hasAnno: !this.state.hasAnno })
  }

  render() {

    const annotations = this.props.annotations;
    const text = this.props.text;
    const stepNum = this.props.stepNum;
    const hasAnno = annotations.length > 0 ?
      true : false;

    return (
      <View style={step_styles.container}>
        <TouchableWithoutFeedback onPress={() => this._onPress(edit, hasAnno)}>
          <View style={step_styles.childTextContainer}>
            <Text style={step_styles.step_text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={step_styles.childIdContainer}>
          <Text style={step_styles.id_text}>{stepNum}</Text>
        </View>
        {hasAnno
          ? annotations.map((anno) => (
            <Annotation annotation={anno} id={this.props.id} edit={this.props.edit} />
          ))
          : <Annotation annotation={""} id={this.props.id} edit={this.props.edit} hide={!this.props.hasAnno} />}
      </View>

    );
  }
}

const step_styles = StyleSheet.create({
  container: {
    // marginLeft: 10,
    // marginRight: 10,
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

export default connect(state => ({ recipe: state.recipe }))(Step);
