import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import store from '../state/Store.js'
import {
  Alert,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import MyTextInput from "./MyTextInput";
import Icon from "react-native-vector-icons/Feather";
import Rating from "./Rating.js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

let RecipeManualForm = props => {
  const { handleSubmit } = props;
  const recipe = props.recipe;

  addIngredients = ({fields}) => (
    <View>
      {fields.map((ing, index) => (
        <View style={f_styles.ingredients}>
          <View style={f_styles.amount}>
            <Field
              name={`${ing}.amt`}
              component={MyTextInput}
              placeholder={"2 cups"}
              label={index}
            />
          </View>

          <View style={f_styles.ingredient}>
            <Field
              name={`${ing}.ing`}
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

      <TouchableOpacity onPress={() => fields.push({}) }>
        <Icon name="plus-circle" size={25} style={{ alignSelf: "center", paddingBottom:12 }}/>
      </TouchableOpacity>
    </View>
  )

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      <View style={f_styles.field}>
        <Text style={f_styles.text}>Title</Text>
        <Field
          name={"title"}
          component={MyTextInput}
          placeholder={"Chicken Enchiladas"}
        />
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Rate</Text>
        <View style={f_styles.rating}>
          <Rating edit={true} fillNum={0} dimension={30} />
        </View>
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Cook Time</Text>
        <Field
          name={"cookTime"}
          component={MyTextInput}
          placeholder={"15 min"}
        />
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Prep Time</Text>
        <Field
          name={"prepTime"}
          component={MyTextInput}
          placeholder={"20 min"}
        />
      </View>

      <View style={f_styles.field}>
        <Text style={f_styles.text}>Difficulty</Text>
        <Field
          name={"difficulty"}
          component={MyTextInput}
          placeholder={"5"}
        />
      </View>

      {/* <View style={f_styles.field}>
        <Text style={f_styles.text}>Rating</Text>
        <Field
          name={"rating"}
          component={MyTextInput}
          placeholder={"5"}
        />
      </View> */}

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

      {/* Checkbox? */}
      <View style={f_styles.field}>
        <Text style={f_styles.text}>Public</Text>
        <Field
          name={"isPublic"}
          component={MyTextInput}
          placeholder={"Yes/No"}
        />
      </View>

      {/* Make Hidden */}
      {/* <View style={f_styles.field}>
        <Field
          name={"source"}
          component={MyTextInput}
          placeholder={"Manual"}
        />
      </View> */}

      <TouchableOpacity onPress={props.handleSubmit}>
        <View style={f_styles.submit}>
          <Text>Submit!</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
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

  submit: {
    backgroundColor: "#53E69D",
    borderRadius: 8,
    paddingTop: 10,
    alignSelf: "center",
    alignItems: "center",
    height: 35,
    width: 200,
    marginBottom: 120
  }
});

export default recipeManualForm = reduxForm({
  form: "recipeManualForm"
})(RecipeManualForm);