import React from "react";
import { Provider } from 'react-redux';
import { Field, FieldArray, reduxForm } from "redux-form";
import store from '../state/Store.js'
// import { Form, Field } from "react-final-form";
import {
  Alert,
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
import { fieldSubscriptionItems } from "final-form";

let RecipeManualForm = props => {
  const { handleSubmit } = props;
  const recipe = props.recipe;

  // TODO: Fix fields so ingredients work correctly
  addIngredients = ({fields}) => (
    <View>
      {fields.map((ingredient, index) => (
        <View style={f_styles.ingredients}>
          <View style={f_styles.amount}>
            <Field
              name={"amount"}
              component={MyTextInput}
              placeholder={"2 cups"}
              label={index}
            />
          </View>

          <View style={f_styles.ingredient}>
            <Field
              name={"ingredient"}
              component={MyTextInput}
              placeholder={"chicken"}
              label={index}
            />
          </View>

          <View style={f_styles.delete}>
            <TouchableOpacity onPress={() => fields.remove(index)}>
              <Icon name="minus-circle" size={25} color="red"/>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={() => fields.push({})}>
        <Icon name="plus-circle" size={25} style={{ alignSelf: "center", paddingBottom:12 }}/>
      </TouchableOpacity>
    </View>
  )

  addSteps = ({fields}) => (
    <View>
      {fields.map((step, index) => (
        <View style={f_styles.steps}>
          <View style={f_styles.step}>
            <Field
              name={step}
              component={MyTextInput}
              placeholder={"Cook it."}
              label={index}
            />
          </View>

          <View style={f_styles.delete}>
            <TouchableOpacity onPress={() => fields.remove(index)}>
              <Icon name="minus-circle" size={25} color="red"/>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={() => fields.push({})}>
        <Icon name="plus-circle" size={25} style={{ alignSelf: "center", paddingBottom:12 }}/>
      </TouchableOpacity>
    </View>
  )

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      {/* <View style={f_styles.field}>
        <Text style={f_styles.text}>Rate</Text>
        <View style={f_styles.rating}>
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
        </View>
      </View> */}

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Title</Text>
        <Field
          name={"title"}
          component={MyTextInput}
          placeholder={"Chicken Enchiladas"}
        />
      </View>

      <View style={f_styles.field}>
        <View style={f_styles.amount}>
          <Text style={f_styles.text}>Ingredients</Text>
          <FieldArray name="ingredients" component={addIngredients}/>
        </View>
      </View>

      <View style={f_styles.field}>
          <Text style={f_styles.text}>Steps</Text>
          <FieldArray name="steps" component={addSteps}/>
      </View>

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
    flex: 1,
    flexDirection: "row"
  },

  field: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 12
  },
  text: {
    paddingBottom: 8,
  },

  ingredients: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12
  },

  amount: {
    flex: 4,
    paddingRight: 5
  },
  ingredient: {
    flex: 9,
    paddingRight: 5,
  },

  steps: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12
  },

  delete: {
    flex: 1
  },
  step: {
    flex: 12,
    paddingRight: 5
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

export default recipeManualForm = reduxForm({
  form: "recipeManualForm"
})(RecipeManualForm);