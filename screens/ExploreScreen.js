import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: "Explore"
    // TODO: replace with search bar and back button
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
