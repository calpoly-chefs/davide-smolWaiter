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

    // Determines how to show annotations: hid, editable, or not editable
    if (this.props.hide) {
      return null;
    }
    else if (this.props.edit) {
      return (
        // FIXME: text styling for new annotations
        <View style={anno_styles.anno}>
          <Field
            name={`pid-${this.props.id}`}
            component={AnnotationInput}
          // placeholder={anno.comment} // DEPRECATED: form gets pre-populated with existing annotations
          />
        </View>
      );
    }
    else {
      return (
        <View style={anno_styles.anno}>
          <Text style={anno_styles.anno_text}>{anno.comment}</Text>
        </View>
      )
    }
  }
}

const anno_styles = StyleSheet.create({
  anno: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",

    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    backgroundColor: "#FFE684",

  },

  anno_text: {
    padding: 10,
    fontSize: 14,
    fontWeight: "bold"
  }
});
