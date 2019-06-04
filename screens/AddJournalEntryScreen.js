import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import JournalEntryFormHeader from "../components/JournalEntryFormHeader";
import CloudinaryImage from "react-native-cloudinary-image-display";
import JournalEntryForm from "../components/JournalEntryForm";
import { connect } from "react-redux";
import { createJournalEntry } from "../actions/actions";
import modal from "../state/ModalSlice";

class AddJournalEntryScreen extends Component {
  makeJournalEntry = (recipe, journalEntry) => {
    var stpAnnos = [];
    var ingAnnos = [];

    for (var anno in journalEntry) {
      if (anno.split("-")[0] == "ing") {
        ingAnnos.push({
          ingid: anno.split("-")[1],
          comment: journalEntry[anno]
        });
      } else if (anno.split("-")[0] == "step") {
        stpAnnos.push({
          stepid: anno.split("-")[1],
          comment: journalEntry[anno]
        });
      }      
    }
    return {
      date: journalEntry["date"],
      recipe: recipe.id,
      stepannotations: stpAnnos,
      ingredientannotations: ingAnnos
    };
  };

  render() {
    const recipe = this.props.modal.currentRecipe;
    return (
      <View style={je_styles.parent}>
        <JournalEntryFormHeader recipe={recipe} />
        <JournalEntryForm
          onSubmit={annos =>
            {
              this.props.createJournalEntry(this.makeJournalEntry(recipe, annos))
              Alert.alert("Journal Entry saved.");
              this.props.navigation.navigate("RecipeHome");
            }
          }
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

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createJournalEntry: jentry => dispatch(createJournalEntry(jentry))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddJournalEntryScreen);
