import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import RecipeHeader from "../components/RecipeHeader";
import Recipes from "../constants/SomeRecipes";
import {CloudinaryContext, Image, Transformation} from "react-native-cloudinary";
import CloudinaryImage from 'react-native-cloudinary-image-display';

export default class RecipeCard extends Component {
  /* props
   *   title: string
   *   source: string
   */

  render() {
    const recipes = Recipes();
    return (
      <View style={rc_styles.parent}>
        {/* <TouchableOpacity
          onPress={this._handleExternalLink.bind(this, this.props.source)}
          // onPress={this.props.nav.navigation.navigate("RecipeDetails")}
          style={rc_styles.child}
        > */}
          {/* <Text style={rc_styles.externalLinkText}>{this.props.name}</Text> */}

          <View style={rc_styles.image}>
            <CloudinaryImage
              cloudName={"littlechef"}
              imageId={"bars.jpg"}
              width={350}
              height={134}
              borderRadius={"14px 14px 0px 0px"}
              style={rc_styles.image}
            />
          </View>
          <RecipeHeader recipes={recipes} />
        {/* </TouchableOpacity> */}
      </View>
    );
  }
  _handleExternalLink = source => {
    console.log(source);
    WebBrowser.openBrowserAsync(source);
  };
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
    paddingVertical: 15
  },
  child: {
    paddingVertical: 15
  },
  externalLinkText: {
    fontSize: 14,
    color: "#F32D98"
  },
  image: {
    flex: 1,
    marginTop: -7,
    flexDirection: "column",
    width: 392,
    // borderRadius: "14px 14px 0px 0px",
    borderTopRightRadius: 14,
    alignSelf: "center"
  }
});

const tags = ["sweet", "salty", "vegan"];
