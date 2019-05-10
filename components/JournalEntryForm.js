import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import MyTextInput from "./MyTextInput";
import Icon from "react-native-vector-icons/Feather";

let JournalEntryForm = props => {
  const { handleSubmit } = props;
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={f_styles.parent}>
      <View style={f_styles.field}>
        <Text>Rate</Text>
        <View style={f_styles.rating}>
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
          <Icon name="star" size={30} />
        </View>
      </View>

      <View style={f_styles.field}>
        <Text>Date</Text>
        <Field
          name={"date"}
          component={MyTextInput}
          placeholder={"Friday, March 15, 2019"}
        />
      </View>
      <View style={f_styles.field}>
        <Text>Prep Time</Text>
        <Field
          name={"prepTime"}
          component={MyTextInput}
          placeholder={"20 min"}
        />
      </View>
      <View style={f_styles.field}>
        <Text>Cook Time</Text>
        <Field
          name={"cookTime"}
          component={MyTextInput}
          placeholder={"40 min"}
        />
      </View>
      <View style={f_styles.field}>
        <Text>Tags</Text>
        <Field
          name={"tags"}
          component={MyTextInput}
          placeholder={"salty, sweet, vegan"}
        />
      </View>
      <View style={f_styles.field}>
        <Text>Comments</Text>
        <Field
          name={"comment"}
          component={MyTextInput}
          placeholder={"309 Pool Party!"}
        />
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
    paddingBottom: 10
  },
  time: {
    flex: 1,
    flexDirection: "row",
    alignContent: "stretch",
    paddingBottom: 10
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

export default reduxForm({
  form: "journalEntry"
})(JournalEntryForm);
