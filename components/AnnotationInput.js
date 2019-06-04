import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function AnnotationInput(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles =
    meta.touched && !meta.active
      ? meta.valid
        ? t_styles.valid
        : t_styles.invalid
      : null;

  return (
    <View style={[t_styles.inputContainer, validationStyles]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={t_styles.input}
        // keyboardType={"number-pad"}
      />
    </View>
  );
}

const t_styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 10
  },
  inputContainer: {
    backgroundColor: "#FFE684",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: "#53E69D"
  },
  valid: {
    borderColor: "#53E69D"
  },
  invalid: {
    borderColor: "#F55E64"
  }
});