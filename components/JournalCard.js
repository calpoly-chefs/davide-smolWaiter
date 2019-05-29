import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import Rating from "./Rating.js";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { connect } from "react-redux";

class JournalCard extends Component {
  render() {
    const allRecipes = this.props.journalEntry.recipes.byId;
    const entry = this.props.entry;
    return (
      <View style={jc_styles.parent}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("JournalDetails")}
          style={jc_styles.parent}
        >
          <CloudinaryImage
            cloudName={"littlechef"}
            imageId={allRecipes[entry.rId].imageName}
            width={5}
            height={5}
            style={jc_styles.image}
          />
          <View style={jc_styles.text}>
            <Text style={jc_styles.title}> {allRecipes[entry.rId].title} </Text>
            <View style={jc_styles.subtext}>
              <Rating fillNum={entry.rating} dimension={25} />
              <Text> {entry.timestamp} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const jc_styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    borderRadius: 14,
    borderColor: "#F0F0EA",
    borderWidth: 1,
    overflow: "hidden",
    height: 100
  },
  image: {
    flex: 1,
    flexGrow: 1
  },
  text: {
    flex: 2,
    flexGrow: 3,
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "flex-end"
  },
  title: {
    right: 0
  },
  subtext: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default connect(state => ({ journalEntry: state.journalEntry }))(
  JournalCard
);
