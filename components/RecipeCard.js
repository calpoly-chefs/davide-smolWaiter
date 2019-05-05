import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import RecipeHeader from "../components/RecipeHeader";
import Recipes from "../constants/SomeRecipes";
import {
  CloudinaryContext,
  Image,
  Transformation
} from "react-native-cloudinary";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { withNavigation } from "react-navigation";

export default class RecipeCard extends Component {
  /* props
   *   title: string
   *   source: string
   */

  render() {
    const recipes = Recipes();
    return (
      <View style={rc_styles.parent}>
        <TouchableOpacity
          // onPress={this._handleExternalLink.bind(this, this.props.source)}
          onPress={() => this.props.navigation.navigate("RecipeDetails")}
          style={rc_styles.child}
        >
          {/* <Text style={rc_styles.externalLinkText}>{this.props.name}</Text> */}

          <CloudinaryImage
            cloudName={"littlechef"}
            imageId={"macarons.jpg"}
            width={350}
            height={134}
            style={rc_styles.image}
          />
          <RecipeHeader recipes={recipes} />
        </TouchableOpacity>
      </View>
    );
  }
  // _handleExternalLink = source => {
  //   console.log(source);
  //   WebBrowser.openBrowserAsync(source);
  // };
}

const rc_styles = StyleSheet.create({
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

const tags = ["sweet", "salty", "vegan"];
