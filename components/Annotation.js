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
    return (
      <View style={anno_styles.container}>
        <Field
          name={"annotation" + anno.id}
          component={AnnotationInput}
          placeholder={anno.comment}
        />
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

  anno_text: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 14,
    fontWeight: "bold"
  }
});
