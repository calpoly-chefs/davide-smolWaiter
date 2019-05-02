import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import RecipeHeader from "../components/RecipeHeader";
import Recipes from "../constants/SomeRecipes";

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
          onPress={this._handleExternalLink.bind(this, this.props.source)}
          style={rc_styles.child}
        >
          {/* <Text style={rc_styles.externalLinkText}>{this.props.name}</Text> */}

          <RecipeHeader recipes={recipes} />
          <View className="card-image">
            {/* <CloudinaryContext cloudName="littlechef">
              <Image className="img" publicId="bars.jpg">
              <Transformation gravity="south" height="134" width="349" y="180" crop="crop" />
              </Image>
            </CloudinaryContext> */}
          </View>

        </TouchableOpacity>
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
    borderRadius: 14,
    borderColor: "#F0F0EA",
    borderWidth: 1,
  },
  child: {
    paddingVertical: 15
  },
  externalLinkText: {
    fontSize: 14,
    color: "#F32D98"
  }
});

const tags = ["sweet", "salty", "vegan"]