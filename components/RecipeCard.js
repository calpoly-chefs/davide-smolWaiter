import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import RecipeHeader from "../components/RecipeHeader";

export default class RecipeCard extends Component {
  /* props
   *   title: string
   *   source: string
   */

  render() {
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
    alignItems: "left",
    // backgroundColor: "#F0F0EA",
    borderRadius: "14px",
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

const recipes =
  [
  {
    "id": 1,
    "title": "Chocolate Chip Caramel Cookie Bars",
    "source": "manual",
    "rating": 4,
    "difficulty": 5,
    "time": 45,
    "prep-time": 25,
    "diff-time": 22,
    "ingredients": [
      {
        "id": 2,
        "quantity": 3,
        "units": "cups",
        "ingredient": "testing",
        "recipe": 1,
        "annotations": []
      },
      {
        "id": 3,
        "quantity": 1,
        "units": "Tbsp",
        "ingredient": "something",
        "recipe": 1,
        "annotations": []
      }
    ],
    "public": true
  },
  {
    "id": 4,
    "title": "Chicken",
    "source": "manual",
    "rating": 0,
    "difficulty": 5,
    "time": 45,
    "ingredients": [
      {
        "id": 5,
        "quantity": 3,
        "units": "cups",
        "ingredient": "third test",
        "recipe": 4,
        "annotations": []
      }
    ],
    "public": false
  }
  ];

  const tags = ["sweet", "salty", "vegan"]