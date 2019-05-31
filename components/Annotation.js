import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Field, reduxForm } from "redux-form";
import AnnotationInput from "./MyTextInput";

export default class Annotation extends React.Component {
  _onPress(edit) {
    edit
      ? Alert.alert("The annotation is touch-ed.")
      : null
  }

  render() {
    const text = this.props.text;
    const date = this.props.date;
    return (
      // <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit)}>
        <View style={anno_styles.container}>
          {/* <Text style={anno_styles.anno_text}>{text}</Text> */}
          <Field
            name={"annotation" + date}
            component={AnnotationInput}
            placeholder={text}
          />
          <Text style={anno_styles.anno_date}>{date}</Text>
        </View>
      // {/* </TouchableWithoutFeedback> */}
    );
  }
}

const anno_styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    alignItems: "flex-start",
    backgroundColor: "#fff"
  },

  container: {
    marginLeft: 30,
    marginRight: 30,
    alignItems: "flex-start",
    backgroundColor: "#FFE684",
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    justifyContent: "space-around"
  },

  anno_text: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 14,
    fontWeight: "bold"
  },

  anno_date: {
    paddingLeft: 15,
    paddingTop: 2,
    paddingRight: 15,
    paddingBottom: 10,
    fontSize: 10,
    color: "grey"
  }
});
