import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WebBrowser } from "expo";
import Icon from "react-native-vector-icons/Feather";

export default class RecipeHeader extends Component {
  render() {
    const recipes = this.props.recipes;
    var tags = this.props.tags;

    return (
      <View style={rh_styles.header} contentContainerSytle={rh_styles.content}>
        <Text style={rh_styles.title}> {makeTitle(recipes[2]["title"])} </Text>
        <View style={rh_styles.rating}>
          <Icon name="star" size={20} />
          <Icon name="star" size={20} />
          <Icon name="star" size={20} />
          <Icon name="star" size={20} />
          <Icon name="star" size={20} />
        </View>
        <Text style={rh_styles.author}>Chowhound</Text>
        <Text style={rh_styles.time}>Time: {makeTime(recipes[2].time)}</Text>
      </View>
    );
  }
}

const makeTime = time => {
  min = time % 60;
  hr = Math.floor(time / 60);
  if (hr == 0) {
    return min + " min";
  }
  return hr + " hr " + min + " min";
};

const makeTitle = title => {
  if (title.length > 36) {
    return title.substr(0, 33) + "...";
  }
  return title;
};

const rh_styles = StyleSheet.create({
  header: {
    margin: 20,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  content: {
    paddingHorizontal: 100
  },

  title: {
    marginLeft: -4,
    fontSize: 20,
    paddingBottom: 5
  },

  rating: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 5
  },

  author: {
    // marginLeft: 4,
    fontSize: 16,
    paddingBottom: 5
  },

  time: {
    fontSize: 13
    // marginLeft: 4,
    // textAlign: "left",
  },

  tags: {
    fontSize: 13
  }
});
