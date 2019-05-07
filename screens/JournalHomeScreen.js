import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class JournalHomeScreen extends React.Component {
  static navigationOptions = {
    title: "Journal"
    // TODO: add filter button
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("JournalDetails")}
            style={styles.tNewScreen}
          >
            <Text style={styles.tNewScreenText}>
              Click me to visit an individual journal entry
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddJournalEntry")}
            style={styles.tNewScreen}
          >
            <Text style={styles.tNewScreenText}>Add a journal entry!</Text>
          </TouchableOpacity>
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
  tContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#F32D98"
  },
  tNewScreen: {
    paddingVertical: 15
  },
  tNewScreenText: {
    fontSize: 14,
    color: "#F0F0EA"
  }
});
