import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function MyTextInput(props) {
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
    backgroundColor: "#F0F0EA",
    borderRadius: 8,
    borderColor: "#53E69D"
  },
  valid: {
    borderColor: "#53E69D"
  },
  invalid: {
    borderColor: "#F55E64"
  }
});

// NOTE: Have to import propTypes for this to work:
// MyTextInput.propTypes = {
//   input: React.PropTypes.shape({
//     onBlur: React.PropTypes.func.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     onFocus: React.PropTypes.func.isRequired,
//     value: React.PropTypes.any.isRequired
//   }).isRequired,
//   meta: React.PropTypes.shape({
//     active: React.PropTypes.bool.isRequired,
//     error: React.PropTypes.string,
//     invalid: React.PropTypes.bool.isRequired,
//     pristine: React.PropTypes.bool.isRequired,
//     visited: React.PropTypes.bool.isRequired
//   }).isRequired
// };
