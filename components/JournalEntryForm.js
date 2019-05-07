import React from "react";
import { Field, reduxForm } from "redux-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";

let JournalEntryForm = props => {
  const { handleSubmit, input } = props;
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <Text>Phone number</Text>
      {/* <Field
        name={"phoneNumber"}
        component={input}
        placeholder={"NNN-NNN-NNNN"}
        // format={phoneFormatter}
        // parse={phoneParser}
      /> */}
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

JournalEntryForm = reduxForm({
  form: "journalEntry"
})(JournalEntryForm);

export default JournalEntryForm;
