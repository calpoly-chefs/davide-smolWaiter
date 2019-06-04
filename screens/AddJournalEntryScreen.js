import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";
import JournalEntryFormHeader from "../components/JournalEntryFormHeader";
import CloudinaryImage from "react-native-cloudinary-image-display";
import JournalEntryForm from "../components/JournalEntryForm";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { createJournalEntry } from "../actions/actions";
import modal from "../state/ModalSlice";

class AddJournalEntryScreen extends Component {
  makeJournalEntry = (recipe, annotationsObj) => {
    annotations = [];
    console.log("WILL -- " + JSON.stringify(annotationsObj));
    for (var id in annotationsObj) {
      annotations.push({
        parentid: id.split("-")[1],
        comment: annotationsObj[id]
      });
    }
    return {
      recipeid: recipe.id,
      annotations: annotations
    };
  };

  render() {
    const recipe = this.props.modal.currentRecipe;
    return (
      <View style={je_styles.parent}>
        <JournalEntryFormHeader recipe={recipe} />
        <JournalEntryForm
          onSubmit={annos =>
            this.props.createJournalEntry(this.makeJournalEntry(recipe, annos))
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
