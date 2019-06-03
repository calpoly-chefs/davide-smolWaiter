import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Picker
} from "react-native";
import MyTextInput from "./MyTextInput";
import Icon from "react-native-vector-icons/Feather";
import Ionicon from "react-native-vector-icons/Ionicons";
import Rating from "./Rating.js";
import Ingredients from "../components/Ingredients.js";
import Steps from "../components/Steps.js";
import { load as loadAnnotations } from "../actions/actions"
import { connect } from 'react-redux'

import Ionicon from "react-native-vector-icons/Ionicons";
import MyPicker from "./MyPicker";
import DropDownItem from "react-native-drop-down-item";

let JournalEntryForm = props => {
  const { handleSubmit, loadAnnotations } = props;
  const ingredients = props.recipe.ingredients;
  const steps = props.recipe.steps;

  // initial data
  const data = {}
  ingredients.map(ingredient => {
    if (ingredient.annotations.length > 0) { // when annotation exists 
      key = "annotation" + ingredient.annotations[0].id;
      value = ingredient.annotations[0].comment;
      data[key] = value
    }
  })
  steps.map(step => {
    if (step.annotations.length > 0) { // when annotation exists 
      key = "annotation" + step.annotations[0].id;
      value = step.annotations[0].comment;
      data[key] = value
    }
  })

  // initial data gets populated in the form
  loadAnnotations(data)

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      <View style={f_styles.rating}>
        <Text style={f_styles.text}>Rate</Text>
        <View style={f_styles.rating}>
          <Rating edit={true} fillNum={0} dimension={30} />
        </View>
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Date</Text>
        <Field
          name={"date"}
          component={MyTextInput}
          placeholder={"Friday, March 15, 2019"}
        />
      </View>

      <View style={f_styles.time}>
        <View style={f_styles.field1}>
          <Text style={f_styles.text}>Prep Time</Text>
          <Field
            name={"prepTime"}
            component={MyTextInput}
            placeholder={"20 min"}
          />
        </View>
        <View style={f_styles.field}>
          <Text style={f_styles.text}>Cook Time</Text>
          <Field
            name={"cookTime"}
            component={MyTextInput}
            placeholder={"40 min"}
          />
        </View>
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Tags</Text>
        <Field
          name={"tags"}
          component={MyTextInput}
          placeholder={"salty, sweet, vegan"}
        />
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Comments</Text>
        <Field
          name={"comment"}
          component={MyTextInput}
          placeholder={"309 Pool Party!"}
        />
      </View>

      <Ingredients ingredients={ingredients} edit={true} />
      <Steps steps={steps} edit={true} />

      {/* <View style={f_styles.field}>
        <DropDownItem
          key={i}
          contentVisible={false}
          invisibleImage={arrow_down}
          visibleImage={arrow_up}
          style={f_styles.dropdown}
          header={
            <Text style={f_styles.dropdowntext}>{"Annotate Ingredients"}</Text>
          }
        >
            <Ingredients ingredients={ingredients} edit={true}/>
        </DropDownItem>
      </View>

      <View style={f_styles.field}>
        <DropDownItem
          key={i}
          contentVisible={false}
          invisibleImage={arrow_down}
          visibleImage={arrow_up}
          style={f_styles.dropdown}
          header={<Text style={f_styles.dropdowntext}>{"Annotate Steps"}</Text>}
        >
            <Steps steps={steps} edit={true}/>
        </DropDownItem>
      </View> */}

      <TouchableOpacity onPress={props.handleSubmit}>
        <View style={f_styles.submit}>
          <Text>Submit!</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const f_styles = StyleSheet.create({
  parent: {
    padding: 20
  },
  rating: {
    width: 150,
    paddingBottom: 5
  },
  text: {
    paddingBottom: 8
  },
  field1: {
    flex: 1,
    paddingBottom: 12,
    paddingRight: 5
  },
  field: {
    flex: 1,
    paddingBottom: 12
  },
  time: {
    flex: 1,
    flexDirection: "row"
  },
  dropdown: {
    alignSelf: "stretch"
  },
  dropdowntext: {
    fontSize: 18
  },
  submit: {
    backgroundColor: "#53E69D",
    borderRadius: 8,
    paddingTop: 10,
    alignSelf: "center",
    alignItems: "center",
    height: 35,
    width: 200,
    marginBottom: 50
  }
});

function mapStateToProps(state) {
  return {
    initialValues: state.annotations.data // pulls initial values from annotations reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAnnotations: (data) => dispatch(loadAnnotations(data))
  };
}

JournalEntryForm = reduxForm({
  form: "journalEntry" // uniquely identifies this form
})(JournalEntryForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalEntryForm);
