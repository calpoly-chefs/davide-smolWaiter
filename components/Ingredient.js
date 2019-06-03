import React from "react";
import { Alert, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FileText } from "react-feather";
import Annotation from "./Annotation.js";
import { Field, FieldArray, reduxForm } from "redux-form";
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
<<<<<<< HEAD
    console.log("anno: " + annotations);
    console.log("text: " + text);
    console.log("hasAnno: " + hasAnno);

    return (

      <View style={ing_styles.container}>

        <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit, hasAnno)}>
          <View style={ing_styles.childContainer}>
            <Text style={ing_styles.ing_text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>

        {hasAnno ?
          annotations.map((anno) => (
            <Annotation annotation={anno} edit={this.props.edit} />
          ))
          : null}
      </View>
=======

    addAnnotation = ({fields}) => (
      this.props.edit && !hasAnno ?
        <View style={ing_styles.container}>
          <TouchableWithoutFeedback onPress={() => fields.push({}) }>
            <View style={ing_styles.childContainer}>
              <Text style={ing_styles.ing_text}>{text}</Text>
            </View>
          </TouchableWithoutFeedback>

          {fields.map( (anno, index) => (
              index == 0 ?
                <Annotation annotation={anno} id={this.props.id} edit={this.props.edit}/>
              : null
            )
          )}
        </View>
      : 
      (!this.props.edit) || (this.props.edit && hasAnno) ?
        <View style={ing_styles.container}>
          <View style={ing_styles.childContainer}>
            <Text style={ing_styles.ing_text}>{text}</Text>
          </View>
          {hasAnno ?
          annotations.map( (anno) => (
            <Annotation annotation={anno} id={this.props.id} edit={this.props.edit}/>
          )) 
          : null}
        </View>
      : null
    )

    return (
      
      // <View style={ing_styles.container}>
      //   <TouchableWithoutFeedback onPress={() => this._onPress(this.props.edit, hasAnno)}>
      //     <View style={ing_styles.childContainer}>
      //       <Text style={ing_styles.ing_text}>{text}</Text>
      //     </View>
      //   </TouchableWithoutFeedback>
      //   {hasAnno ?
      //   annotations.map( (anno) => (
      //     <Annotation annotation={anno} id={this.props.id} edit={this.props.edit}/>
      //   )) 
      //   : null}
      // </View>
      <FieldArray name="annotation" component={addAnnotation} />
>>>>>>> 46bb585f7782f9854a07d5d1f2ef137b616a8c11
    );
  }
}

const ing_styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // backgroundColor: "green"
  },

  childContainer: {
    // marginLeft: 10,
    // marginRight: 10,
    marginTop: 10,
    alignItems: "flex-start",
    backgroundColor: "#F0F0EA",
    // backgroundColor: "purple",
    borderRadius: 7
  },
  ing_text: {
    padding: 15,
    fontSize: 14
  }
});

Ingredient = reduxForm({
  form: "ingredient"
})(Ingredient);

export default connect(state => ({ recipe: state.recipe }))(Ingredient);
