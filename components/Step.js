import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FileText, Bold, AlignCenter } from "react-feather";
import Annotation from "./Annotation.js";
import { connect } from "react-redux";

class Step extends React.Component {
  _onPress(edit) {
    edit
      ? Alert.alert("This is a step.")
      : null
  }

  render() {
    const annotations = this.props.recipe.annotations;
    const annotationIDs = this.props.annotations;
    const text = this.props.text;
    const id = this.props.id;
    return (
      
      <View style={step_styles.container}>
        <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit)}>
          <View style={step_styles.childTextContainer}>
            <Text style={step_styles.step_text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={step_styles.childIdContainer}>
          <Text style={step_styles.id_text}>{id}</Text>
        </View>
        
        {annotationIDs.slice(0, 1).map(id => {
          const anno = annotations.byId[id];
          return <Annotation date={anno.date} text={anno.text} edit={this.props.edit}/>;
        })}
      </View>
      
    );
  }
}

const step_styles = StyleSheet.create({
  // FIXME: this styling is redundent
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
