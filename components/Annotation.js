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
<<<<<<< HEAD
      <View style={anno_styles.container}>
        <Field
          name={"annotation" + anno.id}
          component={AnnotationInput}
          placeholder={anno.comment}
        />
      </View>
=======
      // <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit)}>
        <View style={anno_styles.container}>
          {/* <Text style={anno_styles.anno_text}>{text}</Text> */}
          <Field
            name={`pid-${this.props.id}`}
            component={AnnotationInput}
            placeholder={anno.text}
          />
          <Text style={anno_styles.anno_date}>{anno.date}</Text>
        </View>
      // {/* </TouchableWithoutFeedback> */}
>>>>>>> 46bb585f7782f9854a07d5d1f2ef137b616a8c11
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
