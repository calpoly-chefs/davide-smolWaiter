import React from "react";
import { Image, Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import QuickActionsIcon from "../components/QuickActionsIcon";
import Ratings from "../components/Rating";

export default class QuickActions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {/* Modal Title */}
          <Text style={styles.modalHeaderText}> Quick Actions </Text>

          {/* Rate Recipe */}
          <Ratings fillNum={0} dimension={35} />

          {/* History */}
          <View style={styles.historyContainer}>
            <Text style={styles.modalOptionText}> See Previous Versions </Text>
            <Image
              style={styles.star}
              source={require("../assets/images/clock.png")}
            />
          </View>

          {/* Annotate, Add Recipe and Add Entry */}
          <View style={styles.iconsContainer}>
            <QuickActionsIcon
              source={require("../assets/images/edit-3.png")}
              subtext="Annotate"
            />
            <QuickActionsIcon
              source={require("../assets/images/plus-circle.png")}
              subtext="Add Recipe"
            />
            <QuickActionsIcon
              source={require("../assets/images/book-open.png")}
              subtext="Add Entry"
              navigation={this.props.navigation}
              nextScreen="AddJournalEntry"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  mainContainer: {
    flex: 1,
    bottom: 0,
    top: 500,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },

  modalHeaderText: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 15
    // backgroundColor: "#BDBDBD"
  },

  ratingContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 200,
    alignItems: "center"
  },

  modalOptionText: {
    fontSize: 18,
    textAlign: "center"
  },

  historyContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 60
    // backgroundColor: "green"
  },

  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
