import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";
import RecipeHeader from "../components/RecipeHeader";
import CloudinaryImage from "react-native-cloudinary-image-display";
import Recipes from "../constants/SomeRecipes";
import JournalEntryForm from "../components/JournalEntryForm";
import { Alert } from "react-native";
import { connect } from "react-redux";

class AddJournalEntryScreen extends Component {
  render() {
    const img1 = "bars_.jpg";
    const recipe = this.props.recipe;
    // const recipe = Recipes()[0];
    return (
      <View style={je_styles.parent}>
        {/* <RecipeHeader recipe={recipe.recipes.byId.r1} /> */}
        <JournalEntryForm
          onSubmit={values => Alert.alert("Submitted!", JSON.stringify(values))}
          style={je_styles.form}
          recipe={recipe}
        />
      </View>
    );
  }
}

const je_styles = StyleSheet.create({
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

export default connect(state => ({ recipe: state.recipe }))(
  AddJournalEntryScreen
);
