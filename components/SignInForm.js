import React from "react";
import { Provider } from "react-redux";
import { Field, FieldArray, reduxForm } from "redux-form";
import store from "../state/Store.js";
// import { Form, Field } from "react-final-form";
import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MyTextInput from "./MyTextInput";
import Icon from "react-native-vector-icons/Feather";
import { fieldSubscriptionItems } from "final-form";

let SignInForm = props => {
  const { handleSubmit } = props;

  return (
    <View keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      <View style={f_styles.field}>
        <Field
          name={"username"}
          component={MyTextInput}
          placeholder={"username"}
        />
      </View>

      {/* TODO: mask password field */}
      <View style={f_styles.field}>
        <Field
          type={"password"}
          name={"password"}
          component={MyTextInput}
          secureTextEntry={"true"}
          placeholder={"password"}
        />
      </View>
      <TouchableOpacity onPress={props.handleSubmit}>
        <View style={f_styles.submit}>
          <Text>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const f_styles = StyleSheet.create({
  parent: {
    flex: 0.65,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5
  },

  field: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 12,
    width: 200
  },
  text: {
    paddingBottom: 8
  },

  submit: {
    backgroundColor: "#53E69D",
    borderRadius: 8,
    paddingTop: 10,
    alignSelf: "center",
    alignItems: "center",
    height: 35,
    width: 200
  }
});

export default (signInForm = reduxForm({
  form: "signinForm"
})(SignInForm));
