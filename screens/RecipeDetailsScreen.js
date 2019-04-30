import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class RecipeDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "A Recipe"
    // TODO: add filter button
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.childContainer}>
          <View
            style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View style={{ height: 50, flex: 1, backgroundColor: "steelblue" }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  childContainer: {
    margin: 20,
    flex: 1,
    flexDirection: "row"
  }
});
