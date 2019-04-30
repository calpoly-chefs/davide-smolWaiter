import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";

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
          <Text style={rc_styles.externalLinkText}>{this.props.name}</Text>
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
    alignItems: "center",
    backgroundColor: "#F0F0EA"
  },
  child: {
    paddingVertical: 15
  },
  externalLinkText: {
    fontSize: 14,
    color: "#F32D98"
  }
});
