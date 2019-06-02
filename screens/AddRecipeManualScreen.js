import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";
import RecipeManualForm from "../components/RecipeManualForm";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { createNewRecipe } from "../actions/actions";

class AddRecipeManualScreen extends Component {
  render() {
    return (
      <View style={rm_styles.parent}>
        <RecipeManualForm
          onSubmit={values => createNewRecipe(values)}
          style={rm_styles.form}
        />
      </View>
    );
  }
}

const rm_styles = StyleSheet.create({
  parent: {
    flex: 1,
    // backgroundColor: "#F0F0EA",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10,
    overflow: "hidden"
  },
  child: {
    // paddingVertical: 15
    // borderTopRightRadius: 14,
    // borderTopLeftRadius: 14,
  },

  externalLinkText: {
    fontSize: 14,
    color: "#F32D98"
  },
  image: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-end"
  },
  form: {
    // margin: 30
  }
});

function mapStateToProps(state) {
  return {
      recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return {
      createNewRecipe: (values) => dispatch(createNewRecipe(values))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipeManualScreen)
