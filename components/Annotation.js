import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Field, reduxForm } from "redux-form";
import AnnotationInput from "./AnnotationInput";

export default class Annotation extends React.Component {
  _onPress(edit) {
    edit
      ? Alert.alert("The annotation is touch-ed.")
      : null
  }

  render() {
    const anno = this.props.annotation;
    // console.log("ANNOTATION" + this.props.id + " " + anno.comment)
    if (this.props.hide) {
      return null;
    }
    return (
      // For every ingredient and step, if editable, return a Field component
      this.props.edit ?
        <View style={anno_styles.inputContainer}>
          <Field
            name={`pid-${this.props.id}`}
            component={AnnotationInput}
            placeholder={anno.comment}
          />
        </View>
        : // else, return text

        // FIXME: WEIRD SPACE I HATE IT @Hannah
        <View style={anno_styles.inputContainer}>
          <Text style={anno_styles.anno_text}>{anno.comment}</Text>
        </View>
    );
  }
}

const anno_styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    // alignItems: "flex-start",
    // backgroundColor: "#fff"
    // backgroundColor: "red"
  },
  // container: {
  //   marginLeft: 30,
  //   marginRight: 30,
  //   alignItems: "flex-start",
  //   // backgroundColor: "#FFE684",
  //   backgroundColor: "blue",
  //   borderBottomRightRadius: 7,
  //   borderBottomLeftRadius: 7,
  //   justifyContent: "space-around"
  // },

  input: {

  },
  inputContainer: {
    backgroundColor: "#FFE684",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: "#53E69D",
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    padding: 10
  },

  anno_text: {
    // paddingLeft: 15,
    // paddingTop: 10,
    // paddingRight: 15,
    fontSize: 14,
    fontWeight: "bold",
    height: 50,
    padding: 10,
  }
});
