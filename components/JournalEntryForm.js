import React from "react";
import { Provider } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import store from '../state/Store.js'
// import { Form, Field } from "react-final-form";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Picker
} from "react-native";
import MyTextInput from "./MyTextInput";
import MyPicker from "./MyPicker";
import DropDownItem from "react-native-drop-down-item";
import Icon from "react-native-vector-icons/Feather";
import Ionicon from "react-native-vector-icons/Ionicons"

import Ingredients from "../components/Ingredients.js";
import Steps from "../components/Steps.js";


let JournalEntryForm = props => {
  const { handleSubmit } = props;
  const recipe = props.recipe.recipes.byId.r1;
  const ingredients = props.recipe.ingredients;
  const steps = props.recipe.steps;

  const arrow_up = <Ionicon name='ios-arrow-up' size={20} color='black'/>
  const arrow_down = <Ionicon name='ios-arrow-down' size={20} color={'black'}/>

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      <View style={f_styles.field}>
        <Text style={f_styles.text}>Rate</Text>
        <View style={f_styles.rating}>
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
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
        <View style={f_styles.field}>
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
      
      <View style={f_styles.field}>
        <DropDownItem
          key={i}
          contentVisible={false}
          invisibleImage={arrow_down}
          visibleImage={arrow_up}
          style={f_styles.dropdown}
          header={
            <Text style={f_styles.dropdowntext}>
              {"Annotate Ingredients"}
            </Text>
          }
        >
            <Ingredients recipe={recipe} ingredients={ingredients} edit={true}/>
        </DropDownItem>
      </View>

      <View style={f_styles.field}>
        <DropDownItem
          key={i}
          contentVisible={false}
          invisibleImage={arrow_down}
          visibleImage={arrow_up}
          style={f_styles.dropdown}
          header={
            <Text style={f_styles.dropdowntext}>
              {"Annotate Steps"}
            </Text>
          }
        >
            <Steps recipe={recipe} steps={steps} edit={true}/>
        </DropDownItem>
      </View>


      <TouchableOpacity onPress={props.handleSubmit}>
        <View style={f_styles.submit}>
          <Text>Submit!</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>

    // <Provider store={store}>
    // <Form
    //   onSubmit={handleSubmit}
    // >
    //   {({ handleSubmit, pristine, invalid }) => (
    //     // <form onSubmit={handleSubmit}>
    //       <View style={f_styles.field}>
    //       <Text>Date</Text>
    //       <Field
    //         name={"date"}
    //         component={input}
    //         type={"text"}
    //         placeholder={"Friday, March 15, 2019"}
    //       />
    //       </View>
    //     // </form>
    //   )}
    // </Form>
    // </Provider>
  );
};

const f_styles = StyleSheet.create({
  parent: {
    padding: 20
  },
  rating: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    paddingBottom: 8,
  },
  field: {
    flex: 1,
    paddingBottom: 12
  },
  time: {
    flex: 1,
    flexDirection: "row",
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

export default JournalEntryForm = reduxForm({
  form: "journalEntry"
})(JournalEntryForm);