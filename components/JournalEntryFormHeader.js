import React, { Component } from "react";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class JournalEntryFormHeader extends Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <View style={rh_styles.header}>
        <View style={rh_styles.imageContainer}>
          <CloudinaryImage
            cloudName={"littlechef"}
            imageId={"bars_.png"}
            width={5}
            height={5}
            style={rh_styles.image}
          />
        </View>
        <Text style={rh_styles.title}> {recipe.title} </Text>
      </View>
    );
  }
}

const rh_styles = StyleSheet.create({
  header: {
    margin: 20,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    height: 100,
    width: 100
  },

  title: {
    fontSize: 20,
    paddingLeft: 10
  },
  image: {
    height: 120,
    width: 120
  }
});
