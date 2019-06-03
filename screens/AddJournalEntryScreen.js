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
import JournalEntryForm from "../components/JournalEntryForm";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { fetchAllRecipes } from "../actions/actions";
import modal from "../state/ModalSlice";

const testRecipe =     {
  "title": "some recipe with stuff in it",
  "source": "manual",
  "difficulty": 10,
  "prepTime": 12,
  "cookTime": 1,
  "ingredients": [
      {
          "quantity": 5,
          "units": "cups",
          "ingredient": "Magic",
          "id": 3,
          "annotations": [{
            "comment":"less magic",
            "id": 10,
            "ingredientid":3,
            "date": "2019-06-02" 
          }]
      },
      {
          "quantity": 5,
          "units": "Pounds",
          "ingredient": "Butter",
          "id": 4,
          "annotations": []
      }
  ],
  "steps": [
      {
          "step": "do stuff",
          "id": 5,
          "annotations": [{
            "comment":"More stuff needed",
            "id": 11,
            "instructionid":5,
            "date": "2019-06-02" 
          }]
      },
      {
          "step": "Add Magic",
          "id": 6,
          "annotations": []
      },
      {
          "step": "Season to taste",
          "id": 7,
          "annotations": []
      }
  ],
  "tags": null,
  "id": 2,
  "rating": 5,
  "userID": 1,
  "username": null,
  "public": true
}

class AddJournalEntryScreen extends Component {
  render() {
    const recipe = this.props.modal.currentRecipe;
    return (
      <View style={je_styles.parent}>
        <RecipeHeader recipe={recipe} />
        <JournalEntryForm
          onSubmit={values => Alert.alert("Submitted!", JSON.stringify(values))}
          style={je_styles.form}
          recipe={testRecipe}
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

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllRecipes: () => dispatch(fetchAllRecipes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddJournalEntryScreen)