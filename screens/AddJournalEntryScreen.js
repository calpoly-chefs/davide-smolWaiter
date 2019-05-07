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
import { Field } from "redux-form";
import JournalEntryForm from "../components/JournalEntryForm";

export default class AddJournalEntryScreen extends Component {
  render() {
    const img1 = "bars_.jpg";
    const recipe = Recipes()[0];
    return (
      <View style={je_styles.parent}>
        <RecipeHeader recipe={recipe} />
        <JournalEntryForm />
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
    borderRadius: 14,
    borderColor: "#F0F0EA",
    borderWidth: 1,
    marginBottom: 10,
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
  }
});
